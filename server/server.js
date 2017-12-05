//terminal to run project : 8080;
require ("dotenv").config();
const express = require ("express"),
    bodyParser = require("body-parser"),
    session = require ("express-session"), 
    massive = require ("massive"), 
    axios = require ("axios"),
    passport = require ("passport"),
    Auth0Strategy = require ("passport-auth0"),
    app = express(),
    port = 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));








app.listen(port, ()=> (console.log(`Listening on port ${port}`)));