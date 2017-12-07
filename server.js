
var express = require("express");
var bodyParser = require("body-parser");

var port	 	= process.env.PORT || 3000;

var passport 	= require('passport');
var session	 	= require('express-session');
var env 		= require('dotenv').load();
var exphbs 		= require('express-handlebars')

var app 	 	= express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");



//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/aip_controller.js");

app.use("/", routes);


//For Passport
app.use(session({
secret: 'keyboard cat',
resave: true,
saveUninitialized: true}));//session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login session



// For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', function(req, res){

	res.send('Welcome to our page!');
});



//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport
require('./app/config/passport/passport.js')(passport, models.user);



//Sync Database
models.sequelize.sync().then(function(){
	console.log('Nice! It is working')

}).catch(function(err){
	console.log(err, "Not working")
});





app.listen(3000, function(err){

	if(!err)
		console.log("Connected");
	else console.log(err)
});
