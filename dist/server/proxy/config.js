'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.usersProxy = undefined;
exports.proxy = proxy;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function proxy(mod, params) {
	let options = {
		headers: { 'Content-Type': 'application/json' },
		method: mod.method || 'GET'
	};

	if (mod.method == 'POST' && mod.body) {
		options.body = mod.body;
	}

	return (0, _isomorphicFetch2.default)(mod.url + (params || ''), options).then(function (res) {
		if (res.status >= 400) {
			throw new Error('Bad response from server');
		}
		return res.json();
	});
}

let usersProxy = exports.usersProxy = {
	url: 'http://www.lessoshangcheng.com/lots-web/weixin/users'
};