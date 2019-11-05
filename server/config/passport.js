
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Users = require('../models/users.js');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'login' }, (login, password, done) => {
      Users.findOne({ login: login })
        .then(user => {
          if(!user) return done(null, false, { message: 'That user is not registered' });

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password incorrect' });
            }
          })
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  })

  passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
      done(err, user);
    })
  })
}