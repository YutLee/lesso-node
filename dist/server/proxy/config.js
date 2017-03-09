'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.categoryProxy = exports.usersProxy = undefined;
exports.proxy = proxy;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function status(res) {
	if (res.status >= 200 && res.status < 300) {
		return Promise.resolve(res);
	} else {
		return Promise.reject(new Error(res.statusText));
	}
}

function json(res) {
	return res.json();
}

function proxy(input, init) {
	let options = Object.assign({}, {
		headers: { 'Content-Type': 'application/json' },
		method: 'GET'
	}, init);

	return (0, _isomorphicFetch2.default)(input, options).then(status).then(json).then(function (data) {
		// console.log('Request succeeded with JSON response', data);
		return Promise.resolve(data);
	}).catch(function (error) {
		// console.log('Request failed', error);
		return Promise.reject(new Error(error));
	});
}

let host = 'http://www.lessoshangcheng.com';

let usersProxy = exports.usersProxy = {
	url: host + '/lots-web/weixin/users'
};

let categoryProxy = exports.categoryProxy = {
	url: host + '/lots-web/weixin/categories'
};