var express = require('express');
var Schema = require('../schemas');
var User = require('../schemas/users');

var router = express.Router();

router.get('/Register', function(req, res, next) {
    res.render("/Register");
})

router.post('/Register', function(req, res, next) {
    const user = new User({
      name: req.body.name,
      birth: req.body.age,
      sex: req.body.sex,
      email: req.body.email,
      password: req.body.password,
      gupload: req.body.gupload,
      gbuylist: req.body.gbuylist,
      walletAddress: req.body.walletAddress,
      img: req.body.img,
    });
    user.save()
      .then((result) => {
        console.log(result);
        res.status(201).json(result);
      })
      .catch((err) => {
        console.err(err);
        next(err);
      });
  });