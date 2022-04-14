var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var roasted = require("./models/roasted");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roastedRouter = require('./routes/roasted');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


// We can seed the collection if needed on
//server start
async function recreateDB(){
  // Delete everything
 
  await roasted.deleteMany();
  
  let instance1 = new roasted({Itemname:"roasted sandwich", Quantity:90,
 price:"Fifteen USD"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });

  let instance2 = new roasted({Itemname:"roasted sandwich grill", Quantity:60,
  price:"sixteen USD"});
   instance2.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("second object saved")
   });

   let instance3 = new roasted({Itemname:"roasted chicken sandwich", Quantity:190,
   price:"Twenty USD"});
    instance3.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("third object saved")
    });

    let instance4 = new roasted({Itemname:"roasted grill chicken sandwich", Quantity:86,
    price:"twenty five USD"});
     instance4.save( function(err,doc) {
     if(err) return console.error(err);
     console.log(" fourth object saved")
     });
 }



 let reseed = true;
 if (reseed) { recreateDB();}
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roasted', roastedRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


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