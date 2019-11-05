
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
  console.log(req.body)

  // passport.authenticate('local', (err, user, info) => {
  //   if (err) res.status(500).send([{ message: err }]);
  //   if (!user) res.status(401).send([{ message: 'User not registered' }]);
  //   req.logIn(user, (err) => {
  //     if (err) res.status(500).send([{ message: err }]);
  //     const data = {
  //       _id: user._id,
  //       login: user.login
  //     }
  //     res.send(data)
  //   })
  // })(req, res, next);
})

router.get('/logout' , (req, res) => {
  req.logout();
  res.send(req.user);
});

router.post('/register' , (req, res) => {
  const { login, password, password2 } = req.body;
 
  let errors = [];
  if (!login || !password) {
    errors.push({ message: 'Please fill in all fields' });
  }
  if(password !== password2) {
    errors.push({ message: 'Password do not match' });
  }

  if (errors.length > 0) {
    res.status(500).send(errors);
  } else { 
    Users.findOne({ login: login })
      .then(user => {
        if (user) {
          errors.push({ message: 'User exist!' })
          res.status(500).send(errors);
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
                errors.push({ message: err })
                res.status(500).send(errors);
              });
          })
        }) 
    })
  }
});

module.exports = router;