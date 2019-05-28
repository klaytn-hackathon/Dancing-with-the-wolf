var express = require('express');
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
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
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
=======
    })
});

module.exports = router;
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
