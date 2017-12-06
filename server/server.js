//terminal to run project : 8080;
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
            if (user[0]) {
                return done(null, user[0].user_id);
            } else {
                db.create_user([
                    userData.given_name,
                    userData.family_name,
                    userData.email,
                    userData.identities[0].user_id
                ])
               
                    .then((user) => {
                        return done(null, user[0].user_id);
                    })
            }
            console.log(req.user)
        });
}));

passport.serializeUser(function (id, done) {
    done(null, id);
    console.log(id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0]); // put on req.user for BACKEND use
        })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/home',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Please log in.');
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(308, '/');
})


//endpoints by erin tues 12-5

//////// DECKS ENDPOINTS //////////
//Parent decks
app.get('/api/decks', decksCtrl.allParentDecks);
//Decks by category ==> by userInput
app.get(`api/decks/?q=${req.query.term}`, decksCtrl.decksByCategory);
//Decks and subdecks?
app.get('/api/user/decks/:creatorId', decksCtrl.userDecks);
//Create new Deck
app.post('/api/create/deck', decksCtrl.createDeck);
//Delete Deck by ID
app.delete('/api/deck/delete/:deckId', decksCtrl.deleteDeck);
//Edit Deck
app.put('/api/deck/edit/:deckId', decksCtrl.editDeck);
//Get Favorites
app.get('/api/users/favorites/:userID', decksCtrl.getFavorites);
//Study decks
app.get('/api/deck/study/:deckId', decksCtrl.getStudy);
//Get Children???
app.get('/api/users/decks/:userId', decksCtrl.getSudy);




////////////CARDS ENDPOINTS ///////////////////
//Get Card
app.get('/api/card/:cardId', cardsCtrl.getCard);
//Create a new Card
app.post('/api/create/card', cardsCtrl.createCard);
//Delete a Card
app.delete('/api/card/delete/:cardId', cardsCtrl.deleteCard);
//Edit Card
app.put('/api/card/edit/:cardId', cardsCtrl.editCard);





app.listen(PORT, () => (console.log(`Listening on port ${PORT}`)));