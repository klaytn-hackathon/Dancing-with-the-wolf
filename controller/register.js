var express = require('express');
var Schema = require('../schemas');
var User = require('../schemas/users');

var router = express.Router();

router.get('/Register', function(req, res, next) {
    res.render("/Register");
})