const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Users = require('../models/users.js');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'login' }, (login, password, done) => {
      console.log('tut')
      Users.findOne({ login: login })
        .then(user => {
          console.log('tut22222222222222')
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

  // const opts = {
  //   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  //   secretOrKey: 'secret' // should be in file that's not checked into github
  // }

  // passport.use(
  //   'jwt',
  //   new JwtStrategy(opts, (jwt_payload, done) => {

  //   })
  // )

  passport.serializeUser((user, done) => {
    done(null, user.id);
  })

  passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
      done(err, user);
    })
  })
}