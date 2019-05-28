var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
var User = require('../schemas/users');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

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
  res.render("/Login");
});

router.post('/Login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      console.error('loginError');
      return res.redirect('/');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  }) (req, res, next);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, email, password, done) {
  if(email === 'user001' && password == 'password') {
    return done(null, {
      'user_id': email,
    });
  }else {
    return done(false, null);
  }
}));

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.find({ where: { email }})
    .then(user => done(null, user))
    .catch(err => done(err));
});

router.get('/Logout', function(req, res) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;