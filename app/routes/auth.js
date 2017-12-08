var controller = require('../controllers/controller.js');

module.exports = function(app, passport) {

	app.get('/signup', controller.signup);

	app.get('/signin', controller.signin);


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/dashboard',

		failureRedirect: '/signup'
		}

	));

	app.get('/dashboard', isLoggedIn, controller.dashboard);

	app.get('/logout', controller.logout);

	app.post('/authenticate_email', passport.authenticate('local-signin', {
		successRedirect: '/dashboard',

		failureRedirect: '/signin'

		}
	));

	function isLoggedIn(req, res, next){

		if(req.isAuthenticated())

			return next();

		res.redirect('/signin');
	}
}
