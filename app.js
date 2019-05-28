var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');
var flash = require('connect-flash');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var enterpriseRouter = require('./routes/enterprises');
var gameRouter = require('./routes/games');
var boardRouter = require('./routes/boards');
var commentRouter = require('./routes/comments');
var connect = require('./schemas');
var passport = require('passport');


var app = express();
connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
  secret: 'my key',
  resave: true,
  saveUninitalized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/enterprises', enterpriseRouter);
app.use('/games', gameRouter);
app.use('/boards', boardRouter);
app.use('/comments', commentRouter);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Runs on ${port}`);
});

module.exports = app;