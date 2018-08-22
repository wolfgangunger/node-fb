console.log('fb check 2');

var fbsdk = require('facebook-sdk');

var facebook = new fbsdk.Facebook({
  //appId  : '97919116226520',
  appId  : '1881763232129988',
  //secret : '6d8bac94e4678ab8d5a84d538c296a5'
  secret : '6350f34991779700077e5195d29af060'
});

facebook.api('/1881763232129988', function(data) {
  console.log(data);
});