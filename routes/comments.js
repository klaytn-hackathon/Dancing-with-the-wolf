var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();

router.get('/:cid', function (req, res, next) {
  Comment.find({ writer: req.params.cid}).populate('writer')
    .then((Comments) => {
      res.json(Comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});


router.post('/', function(req, res, next) {
  const comment = new Comment({
    cid : req.body.cid,
    title : req.body.title,
    content : req.body.content,
    cwriter : req.body.cwriter,
    comdate : req.body.date,
    boardno : req.body.boardno,
  });
  comment.save()
    .then((result) => {
      return Comment.populate(result, { path: 'writer'});
    })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

router.patch('/:cid', function(req, res, next) {
  Comment.update({ cid: req.params.cid }, {
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

router.delete('/:cid', function (req, res, next) {
  Comment.remove({ cid: req.params.cid })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
});

module.exports = router;