'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', function (req, res, next) {
	console.log(1);
	let html = `<!doctype html>
		<html>
		  <head>
		    <title>Redux Universal Example</title>
		  </head>
		  <body>
		  	<h1>message</h1>
		    <h2>error.status</h2>
		  	<pre>error.stack</pre>
		  </body>
		</html>`;
	console.log(html);
	res.render('error', { title: 'error', html: html, initialState: '' });
});

exports.default = router;