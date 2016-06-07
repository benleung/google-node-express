var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var auth = require('./auth');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(session({ secret: "(WSJ 2016 Top Secret!)", resave: false, saveUninitialized: true }));  // TODO: Update this Hashkey with random text
app.use(auth.initialize());
app.use(auth.session());

// To showcase how to get req.user
app.get('/', function (req, res){
	  res.end( JSON.stringify(req.user || {}) );
});

// To showcase how to protect path with okta
app.get('/auth/google', auth.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback',
            auth.authenticate('google', {
                    successRedirect : '/',
                    failureRedirect : '/'
            }));

app.get('/login', auth.authenticate('google', { failureRedirect: '/', failureFlash: true }), function (req, res) {
    res.redirect('/');
  }
);

var port = process.env.PORT || 3333;
app.listen(port);
console.log("Server started, listening to " + port);
