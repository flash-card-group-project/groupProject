require("dotenv").config();
const express = require("express"),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    massive = require("massive"),
    axios = require("axios"),
    passport = require("passport"),
    Auth0Strategy = require("passport-auth0"),
    decksCtrl = require('./controllers/decks_controller'),
    cardsCtrl = require('./controllers/cards_controller'),
    app = express(),
    PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    // console.log(db);
    console.log('db is connected');
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id])
        .then((user) => {
            // console.log(user)
            if (user[0]) {
                return done(null, user[0].id);
            } else {
                db.create_user([
                    userData.given_name,
                    userData.family_name,
                    userData.email,
                    userData.identities[0].user_id
                ]).then((user) => {
                    return done(null, user[0].user_id);
                }).catch(err => console.log('create', err))
            }
        }).catch(err => console.log('find', err));
}));

passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    // console.log("auth", id)
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0]); // put on req.user for BACKEND use
        })
})


//////// USER ENDPOINTS //////////

app.get('/auth', passport.authenticate('auth0'));
// console.log(passport);
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESSFUL_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))

app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user)
    } else {
        return res.status(401).send(`You Need To Log In`)
    }
})

app.get('/auth/logout', (req, res) => {
    req.logout()
    res.redirect(process.env.LOG_OUT_REDIRECT)
})


//endpoints by erin tues 12-5

//////// DECKS ENDPOINTS //////////


//all public decks
app.get('/api/public/decks', decksCtrl.getPublicDecks);
//Decks and subdecks
app.get('/api/user/decks', decksCtrl.getUserDecks);
//get current deck; the deck you click on
app.get('/api/deck/currentDeck/:deck_id', decksCtrl.getCurrentDeck);
// //Create new Deck
app.post('/api/create/deck', decksCtrl.createDeck);
// Put private/public toggle switch
app.put('/api/decks/private-toggle/:deckid', decksCtrl.privateToggle);
// //Delete Deck by ID
app.delete('/api/delete/deck/:deckId', decksCtrl.deleteDeck);
// //Edit Deck
app.put('/api/deck/edit/:deck_id', decksCtrl.editDeck);
// //Get Favorites
app.get('/api/user/favorites', decksCtrl.getFavoriteDecks);
//ADD to Favorites aka edit the array of favorote deck id's:
app.post('/api/add/favorites/:deckId', decksCtrl.addToFavorites);
//DELETE from favorites based on deck id
app.delete('/api/delete/favorites/:deckId', decksCtrl.deleteFromFavorites);



////////////CARDS ENDPOINTS ///////////////////
//Create a new Card
app.post('/api/create/card/:deck_id', cardsCtrl.createCard);
//Delete a Card
app.delete('/api/card/delete/:cardId', cardsCtrl.deleteCard);
//Edit Card
// app.put('/api/card/edit/:cardId', cardsCtrl.editCard);





app.listen(PORT, () => (console.log(`Listening on port ${PORT}`)));