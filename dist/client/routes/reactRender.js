'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reactRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reactRender(App) {
	function reducer(state = window.__INITIAL_STATE__ || {}) {
		return Object.assign({}, state);
	}

	let store = (0, _redux.createStore)(reducer);

	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(App, null)
	), document.getElementById('root'));
}