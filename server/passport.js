const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();

passport.use(new FacebookStrategy({
  clientID: '1199458670180745',
  clientSecret: 'b88aebdf7f7a9bbc58046048d66f4944',
  callbackURL: '/auth/facebook/callback'
},
  function(accessToken, refreshToken, profile, done) {
  	console.log('accessToken', accessToken);
  	console.log('refreshToken', refreshToken);
  	console.log('profile', profile);

    User.find({'facebookID': profile.id}, function(err, data) {
      if (err) {
        return done(err);
      }
      //if no data create new user with values from Google
      if (data.length === 0) {
        user = new User({
          facebookID: profile.id, 
          name: profile.displayName, 
          email: profile.emails[0].value
        });
        user.save(function(err, user) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        //found user. Return
        return done(err, data);
      }
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook', 
  { session: false, scope: ['profile', 'email'] }));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', {failureRedirect: '/'}), function(req, res) {
    res.redirect('/profile');
  });

app.get('/profile', function (req, res) {
  console.log('we got to the profile page');
  res.send('AUTHENTICATION OK!');
});