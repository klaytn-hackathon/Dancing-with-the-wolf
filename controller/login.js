var express = require('express');
var Schema = require('../schemas');
var User = require('../schemas/users');


var router = express.Router();

router.get('/Login', function(req, res, next) {
    res.render("/Login");
});
  