var express = require('express');
var Enterprise = require('../schemas/enterprise');

var router = express.Router();

router.get('/', function (req, res, next) {
  Enterprise.find({})
    .then((enterprises) => {
      res.json(enterprises);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function(req, res, next) {
  const enterprise = new Enterprise({
    Ename: req.body.Ename,
    Epassword: req.body.Epassword,
    Ephoneno: req.body.Ephoneno,
    Rname: req.body.Rname,
    Rmobile: req.body.Rmobile,
    Rphoneno: req.body.Rphoneno,
    Remail: req.body.Remail,
    Egupload: req.body.Egupload,
    EwalletAddress: req.body.EwalletAddress,
    Eimg: req.body.Eimg,
  });
  enterprise.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

router.patch('/:Remail', function(req, res, next) {
  Enterprise.update({ Remail: req.params.Remail }, {
    Ename: req.body.Ename,
    Epassword: req.body.Epassword,
    Ephoneno: req.body.Ephoneno,
    Rname: req.body.Rname,
    Rmobile: req.body.Rmobile,
    Rphoneno: req.body.Rphoneno,
    Remail: req.params.Remail,
    Egupload: req.body.Egupload,
    EwalletAddress: req.body.EwalletAddress,
    Eimg: req.body.Eimg,
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

router.delete('/:email', function (req, res, next) {
  Enterprise.remove({ Remail: req.params.Remail })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

module.exports = router;