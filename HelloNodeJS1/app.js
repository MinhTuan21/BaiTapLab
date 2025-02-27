  var createError = require('http-errors');
  var express = require('express');
  var path = require('path');
  var cookieParser = require('cookie-parser');
  var logger = require('morgan');

  const database = require('./config/db')


  var usersRouter = require('./routes/userRoutes');
  var productsRouter = require('./routes/productRoutes');

  var app = express();


  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));


  app.use('/users', usersRouter);
  app.use('/products', productsRouter);
  app.use("/images", express.static("public/images"));

  database.connect()

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://172.16.53.132:${PORT}`);
});

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

  module.exports = app;
