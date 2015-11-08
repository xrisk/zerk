var gulp = require('gulp'), 
	logger = require('morgan');
require('./gulpfile.js');
console.log("Starting gulp ... ");
gulp.start('default');
console.log("Gulp finished execution.")

var express = require('express');
var compression = require('compression');
var app = express();
app.use(logger('combined'));
app.use(compression());

app.use(express.static('public', {
	maxAge: "864000000"
}));

var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log('Server listening at port ' + port);
});
