// Look at this for quick tutorial:
// https://www.youtube.com/watch?v=PFP0oXNNveg

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/API');

var port= 3000;

var app = express();

//////////////View Engine - Folder to use for Views
// Tells engine views will be in the "views" folder
app.set('views', path.join(__dirname, 'views'));

// specify engine
app.set('view engine', 'ejs');

// render files with an html extension
app.engine('html', require('ejs').renderFile);

///////// static folder to put in Angular stuff
// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Create route (homepage)
app.use('/', index);

// current task
app.use('/api', tasks);

//listen at port #
app.listen(port, function(){
    console.log('Server started on port ' + port);
});