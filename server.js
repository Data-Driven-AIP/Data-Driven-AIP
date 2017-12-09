var PORT = process.env.PORT || 3000;
var express 	= require('express');
var path 			= require('path');
var bodyParser= require('body-parser');
var sequelize = require("sequelize")
var db 				= require("./models");
var routes 		= require("./controllers/aip_controller.js");
var exphbs 		= require("express-handlebars");
var passport	= require('passport');
var session	 	= require('express-session');
var env 			= require('dotenv').load();
var app 	 		= express();


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Sets up the Express app to handle data parsing
//For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Static directory
app.use(express.static("public"));

//For Passport
app.use(session({
secret: 'keyboard cat',
resave: true,
saveUninitialized: true}));//session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login session

// For Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.engine('hbs', exphbs({extname: '.hbs'}));
app.set("view engine", "handlebars");
//app.set('view engine', '.hbs');
app.set('views', './views')


// redirect users of main page to /home
// app.get('/', function(req, res){
// 	res.redirect('/home');
// });

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
app.use("/", routes);

//load passport
require('./app/config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function(){
	console.log('Nice! It is working')

}).catch(function(err){
	console.log(err, "Not working")
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
		if(!err)
			console.log("App listening on PORT " + PORT);
		else console.log(err);

  });
});
