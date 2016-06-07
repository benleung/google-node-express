var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://127.0.0.1:3333/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.protect = function protect(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

exports = module.exports = passport;
