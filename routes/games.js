var express = require('express');
var Game = require('../schemas/game');

var router = express.Router();

router.get('/:id', function (req, res, next) {
  Game.find({ })
    .then((Games) => {
      res.json(Games);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function(req, res, next) {
  const Game = new Game({
    Gname: req.body.Gname,
    Gmemory: req.body.Gmemory,
    GGraphic: req.body.GGraphic,
    GOsys: req.body.GOsys,
    Gprocessor: req.body.Gprocessor,
    Gstorage: req.body.Gstorage,
    GDirectX: req.body.GDirectX,
    Gid: req.body.Gid,
    Gdescript: req.body.Gdescript,
    Guploader: req.body.Guploader,
    Gdate: req.body.Gdate,
    Gprice: req.body.Gprice,
  });
  Game.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

router.patch('/:Gid', function(req, res, next) {
  Game.update({ Gid: req.params.Gid }, {
    Gname: req.body.Gname,
    Gmemory: req.body.Gmemory,
    GGraphic: req.body.GGraphic,
    GOsys: req.body.GOsys,
    Gprocessor: req.body.Gprocessor,
    Gstorage: req.body.Gstorage,
    GDirectX: req.body.GDirectX,
    Gid: req.body.Gid,
    Gdescript: req.body.Gdescript,
    Guploader: req.body.Guploader,
    Gdate: req.body.Gdate,
    Gprice: req.body.Gprice,
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

router.delete('/:Gid', function (req, res, next) {
  Game.remove({ Gid: req.params.Gid })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

module.exports = router;