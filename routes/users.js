var express = require('express');
var User = require('../schemas/users');

var router = express.Router();

<<<<<<< HEAD
router.get('/register', function (req, res, next) {
=======
router.get('/', function (req, res, next) {
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

<<<<<<< HEAD

router.post("/Register", function(req, res, next) {
  const user = new User({
    name: req.body.name,
    birth: req.body.birth,
=======
router.post('/', function(req, res, next) {
  const user = new User({
    name: req.body.name,
    birth: req.body.age,
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
    sex: req.body.sex,
    email: req.body.email,
    password: req.body.password,
    gupload: req.body.gupload,
    gbuylist: req.body.gbuylist,
    walletAddress: req.body.walletAddress,
<<<<<<< HEAD
    mobile: req.body.mobile,
=======
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
    img: req.body.img,
  });
  user.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
<<<<<<< HEAD
      console.error(err);
=======
      console.err(err);
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
      next(err);
    });
});

router.patch('/:email', function(req, res, next) {
  User.update({ email: req.params.email }, {
    name: req.params.name,
<<<<<<< HEAD
    birth: req.body.birth,
=======
    birth: req.body.age,
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
    sex: req.body.sex,
    email: req.body.email,
    password: req.body.password,
    gupload: req.body.gupload,
    gbuylist: req.body.gbuylist,
    walletAddress: req.body.walletAddress,
<<<<<<< HEAD
    mobile: req.body.mobile,
=======
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
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

<<<<<<< HEAD
router.get('/Login', function(req, res, next) {
  res.render("")
})

=======
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
module.exports = router;