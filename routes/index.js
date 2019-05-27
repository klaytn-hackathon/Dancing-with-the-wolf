var express = require('express');
var User = require('../schemas/users');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.render('mongoose', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

module.exports = router;
