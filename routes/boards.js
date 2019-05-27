var express = require('express');
var Board = require('../schemas/board');

var router = express.Router();

router.get('/:email', function (req, res, next) {
  Board.find({ writer: req.params.email }).populate('writer')
    .then((Boards) => {
      res.json(Boards);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get('/:Remail', function (req, res, next) {
  Board.find({ writer: req.params.Remail }).populate('writer')
    .then((Boards) => {
      res.json(Boards);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});


router.post('/', function(req, res, next) {
  const board = new Board({
    boardid : req.body.boardid,
    title : req.body.title,
    content : req.body.content,
    writer : req.body.writer,
    date : req.body.date,
    step : req.body.step,
  });
  board.save()
    .then((result) => {
      return Board.populate(result, { path: 'writer'});
    })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

router.patch('/:boardid', function(req, res, next) {
  Board.update({ boardid: req.params.boardid }, {
    title : req.body.title,
    content : req.body.content,
    writer : req.body.writer,
    date : req.body.date,
    step : req.body.step,
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

router.delete('/:boardid', function (req, res, next) {
  Board.remove({ boardid: req.params.boardid })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

module.exports = router;