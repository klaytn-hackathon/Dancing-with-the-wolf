var express = require('express');
<<<<<<< HEAD
=======
<<<<<<< HEAD
var router = express.Router();
var User = require('../schemas/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('index.html', { users });
=======
var User = require('../schemas/users');
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
var router = express.Router();
var User = require('../schemas/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('index.html', { users });
    });
  });


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
<<<<<<< HEAD
      res.render('index.html', { users });

=======
      res.render('mongoose', { users });
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
    })
    .catch((err) => {
      console.error(err);
      next(err);
<<<<<<< HEAD
    });
});

router.get('/Login', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('Login.html', { users });
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
    })
    .catch((err) => {
      console.error(err);
      next(err);
<<<<<<< HEAD

=======
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
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
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
<<<<<<< HEAD

router.get('/Register', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('Register.html', { users });
=======
module.exports = router;
=======
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

<<<<<<< HEAD

module.exports = router;
=======
module.exports = router;
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
