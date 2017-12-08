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
            console.log(user)
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
            console.log(req.user)
        }).catch(err => console.log('find', err));
}));

passport.serializeUser(function (id, done) {
    console.log('serializing');
    return done(null, id);
    // console.log(id);
})
passport.deserializeUser(function (id, done) {
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
        // console.log(req.user)
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

app.get('/api/currentUser', decksCtrl.getUserInfo);
//Get All public Decks, need this to find category
app.get('/api/all/decks', decksCtrl.getAllPublicDecks);
//Parent decks
app.get('/api/decks', decksCtrl.allParentDecks);
//Decks by category ==> by userInput
// app.get(`api/decks/?q=${req.query.term}`, decksCtrl.decksByCategory);
//Decks and subdecks?
app.get('/api/user/decks', decksCtrl.getUserDecks);
// //Create new Deck
// app.post('/api/create/deck', decksCtrl.createDeck);
// //Delete Deck by ID
// app.delete('/api/deck/delete/:deckId', decksCtrl.deleteDeck);
// //Edit Deck
// app.put('/api/deck/edit/:deckId', decksCtrl.editDeck);
// //Get Favorites
app.get('/api/user/favorites', decksCtrl.getFavoriteDecks);
// //Study decks
// // app.get('/api/deck/study/:deckId', decksCtrl.getStudy);
// //Get Children???
// app.get('/api/users/decks/:userId', decksCtrl.getSudy);



////////////CARDS ENDPOINTS ///////////////////
//Get User card
app.get('/api/user/card', cardsCtrl.getUserCard);
//Get Card
app.get('/api/card/:cardId', cardsCtrl.getCard);
//Create a new Card
app.post('/api/create/card', cardsCtrl.createCard);
//Delete a Card
app.delete('/api/card/delete/:cardId', cardsCtrl.deleteCard);
//Edit Card
app.put('/api/card/edit/:cardId', cardsCtrl.editCard);





app.listen(PORT, () => (console.log(`Listening on port ${PORT}`)));