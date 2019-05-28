var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var expressSession = require('express-session');
var flash = require('connect-flash');
require('dotenv').config();
=======
<<<<<<< HEAD
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var enterpriseRouter = require('./routes/enterprises');
var gameRouter = require('./routes/games');
var boardRouter = require('./routes/boards');
var commentRouter = require('./routes/comments');
var connect = require('./schemas');
var passport = require('passport');
=======


>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var enterpriseRouter = require('./routes/enterprises');
var gameRouter = require('./routes/games');
var boardRouter = require('./routes/boards');
var commentRouter = require('./routes/comments');
var connect = require('./schemas');
<<<<<<< HEAD
var passport = require('passport');

=======
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76

var app = express();
connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
<<<<<<< HEAD
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
=======
<<<<<<< HEAD
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
=======
app.set('view engine', 'jade');
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76

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
<<<<<<< HEAD
app.use('/enterprises', enterpriseRouter);
app.use('/games', gameRouter);
app.use('/boards', boardRouter);
app.use('/comments', commentRouter);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
=======
app.use('/enterprises', enterprisesRouter);
app.use('/games', gamesRouter);
app.use('/boards', boardsRouter);
app.use('/comments', commentsRouter);
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Runs on ${port}`);
});

<<<<<<< HEAD
=======
=======
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
module.exports = app;