
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const Users = require('../models/users.js');

router.get('/user', (req, res) => {
  const data = req.user 
    ? {
        _id: req.user._id,
        login: req.user.login
      }
    : '';
  res.send(data);
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) res.status(500).send(err);
    if (!user) res.status(401).send('User is not registered');
    req.logIn(user, (err) => {
      if (err) res.status(500).send(err);
      const data = {
        _id: user._id,
        login: user.login
      }
      res.send(data)
    })
  })(req, res, next);
})

router.get('/logout' , (req, res) => {
  req.logout();
  res.send(req.user);
});

router.post('/register' , (req, res) => {
  const { login, password } = req.body.args;

  if (!login || !password) {
    res.status(500).send('Fill all fields!');
  }

  Users.findOne({ login: login })
    .then(user => {
      if (user) {
        res.status(500).send('Username already exists');
      }
      const newUser = {
        login,
        password
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
        
          Users.create(newUser)
            .then(result => {
              res.json(result)
          })
            .catch(err => {
              res.status(500).send(err);
            });
        })
      }) 
  })
});

module.exports = router;