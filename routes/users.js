var express = require('express');
var User = require('../schemas/users');

var router = express.Router();

router.get('/register', function (req, res, next) {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});


router.post("/Register", function(req, res, next) {
  const user = new User({
    name: req.body.name,
    birth: req.body.birth,
    sex: req.body.sex,
    email: req.body.email,
    password: req.body.password,
    gupload: req.body.gupload,
    gbuylist: req.body.gbuylist,
    walletAddress: req.body.walletAddress,
    mobile: req.body.mobile,
    img: req.body.img,
  });
  user.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.patch('/:email', function(req, res, next) {
  User.update({ email: req.params.email }, {
    name: req.params.name,
    birth: req.body.birth,
    sex: req.body.sex,
    email: req.body.email,
    password: req.body.password,
    gupload: req.body.gupload,
    gbuylist: req.body.gbuylist,
    walletAddress: req.body.walletAddress,
    mobile: req.body.mobile,
    img: req.body.img,
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

router.delete('/:email', function (req, res, next) {
  User.remove({ email: req.params.email })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

router.get('/Login', function(req, res, next) {
  res.render("")
})

module.exports = router;