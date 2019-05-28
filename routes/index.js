var express = require('express');
var router = express.Router();
var User = require('../schemas/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('index.html', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get('/Login', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('Login.html', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get('/Register', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('Register.html', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get('/Login', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('Login.html', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
module.exports = router;