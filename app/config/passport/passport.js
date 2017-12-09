console.log("Passport loading");

var bCrypt = require('bcrypt-nodejs');
var passport = require('passport');

module.exports = function(passport, user){

	console.log("Passport module exports")

	var User = user;

	var LocalStrategy = require('passport-local').Strategy;

	//serialize
	passport.serializeUser(function(user, done){

		done(null, user.id);
	});

	//deserialize.user
	passport.deserializeUser(function(id, done){

		User.findById(id).then(function(user){

			if (user){

				done(null, user.get());

			} else {

				done(user.errors, null);
			}
		});
	});


	passport.use('local-signup', new LocalStrategy(
			{
				usernameField: 'email',

				passwordField: 'password',

				passReqToCallback: true // allows us to pass back the entire request to the callback

			},

			function (req, email, password, done){

				console.log("Attempting sign up")
				var generateHash = function(password){

					return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
				};

				User.findOne({
					where:{
						email: email
					}
				}).then(function(user){
					if (user)
					{
						console.log(user)
						req.flash('info', 'The email is already taken');
						return done(null, false, {
							message: 'That email is already taken'
						});
						console.log(email)
				} else

				{
					var userPassword = generateHash(password);

					var data =

					{
						email: email,

						password: userPassword,

						firstname: req.body.firstname,

						lastname: req.body.lastname
					};


					User.create(data).then(function(newUser, created){

						if (!newUser){

							return done(null, false);
						}

						if (newUser){
							return done(null, newUser);
						}
					});
				}

				});

			}

		)
	);

	//Local signin
	passport.use('local-signin', new LocalStrategy(
		{
			//by default, local strategy uses username and password, we will override with email
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true //allows us to pass back the entire request to the callback
		},
		function(req, email, password, done){
				console.log("Local sign in");

				var User = user;

				var isValidPassword = function(userpass, password){

					return bCrypt.compareSync(password, userpass);
				}

				User.findOne({
					where: {
						email: email
					}
				}).then(function(user){

					if(!user){
						console.log("Email does not exist");
						req.flash('info', 'Email does not exist');

						return done(null, false, {
							message: 'Email does not exist'
						});
					}

					if (!isValidPassword(user.password, password)){
						console.log("Incorrect Password");
						req.flash('info', 'Incorrect Password');

						return done(null, false, {
							message: 'Incorrect password.'
						});
					}

					var userinfo = user.get();

					console.log(userinfo);
					req.flash('login_name', userinfo['firstname'])

					console.log(req.flash('login_name'));

					return done(null, userinfo);

				}).catch(function(err){

					console.log("Error on signin", err);

					return done(null, false, {
						message: "Something went wrong with your Signin"
					});
				});
			}

		)
	);

}
