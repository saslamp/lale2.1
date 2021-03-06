const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const customersRouter = require('./routes/customers');
const authRouter = require('./routes/auth');

const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb+srv://saslale:sasLaleDB@cluster0.6obt8.mongodb.net/development?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(() => console.log('connected to Mongodb Atlas successfully!'))
	.catch((err) => console.error(JSON.stringify(err)))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('./uploads'));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/customers', customersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
