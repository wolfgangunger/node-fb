
console.log('fb check');

var connect = require('connect'),
fbsdk = require('facebook-sdk');

connect()
.use(connect.cookieParser())
.use(connect.bodyParser())
.use(fbsdk.facebook({
	  //appId  : '97919116226520',
	  appId  : '1881763232129988',
	  //secret : '6d8bac94e4678ab8d5a84d538c296a5'
	  secret : '6350f34991779700077e5195d29af060'
}))
.use(function(req, res, next) {

  if (req.facebook.getSession()) {
    res.end('<a href="' + req.facebook.getLogoutUrl() + '">Logout</a>');

    // get my graph api information
    req.facebook.api('/me', function(me) {
        console.log(me);
    });

  } else {
      res.end('<a href="' + req.facebook.getLoginUrl() + '">Login</a>');
  }

})
.listen(3000);