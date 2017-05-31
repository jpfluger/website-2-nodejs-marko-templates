/**********************************************
* Required node libraries
*/

// see: http://markojs.com/docs/express/
require('marko/node-require');

var express = require('express'),
	app = express(),
	path = require('path'),
	markoExpress = require('marko/express');

/**********************************************
* Serve STATIC files that are available to the public
*/

app.use('/public', express.static('public'));
// if not using /public/_third directly, then map-in the folder bower_components/
//app.use('/public/_third', express.static(path.join(__dirname, 'bower_components')));

/**********************************************
* Marko templates
*/

var marko = {};

// https://github.com/marko-js/marko/blob/master/src/express.js
var renderMarkoTemplate = function(res, pathToFile, data) {
	if (!marko[pathToFile]) {
		marko[pathToFile] = require('./' + pathToFile)
	}

	// it's okay if data is null
	res.marko(marko[pathToFile], data)
}

//app.use(markoExpress()); //enable res.marko(template, data)

/**********************************************
* Routes
*/

app.get('/', function (req, res) {
  res.redirect('/home')
});

app.get('/home', markoExpress(), function (req, res) {
	renderMarkoTemplate(res, 'views/home.marko')
});

app.get('/time', markoExpress(), function (req, res) {
	renderMarkoTemplate(res, 'views/time.marko', {time: new Date().toLocaleString()})
});

/**********************************************
* Error handling
*/

app.use(markoExpress(), function(req, res, next) {
	res.status(404);
	renderMarkoTemplate(res, 'views/404.marko')
});

app.use(markoExpress(), function(err, req, res, next) {
	res.status(500);
	renderMarkoTemplate(res, 'views/500.marko')
});

app.listen(8080, function () {
  console.log('Sample app listening on http://localhost:8080');
});