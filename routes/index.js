var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your First Express App', message: 'Express is actually pretty easy and could replace vue' });
});

// Copied and pasted above route - get a dynamic user via the route parameter
// Changed the / to /:user to grab a user added a conole log and chnaged user render page
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user])
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
