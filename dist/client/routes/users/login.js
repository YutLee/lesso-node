'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _LoginFrom = require('../../containers/LoginFrom');

var _LoginFrom2 = _interopRequireDefault(_LoginFrom);

require('../../styles/common');

require('../../styles/login');

require('../../styles/footer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'babel-polyfill'
(0, _reactDom.render)(_react2.default.createElement(_LoginFrom2.default, null), document.getElementById('root'));

// let store = createStore(todoApp)