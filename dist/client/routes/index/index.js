'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('../../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('../../components/App');

var _App2 = _interopRequireDefault(_App);

var _TopMenu = require('../../components/TopMenu');

var _TopMenu2 = _interopRequireDefault(_TopMenu);

require('../../styles/common');

require('../../styles/top-menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let store = (0, _redux.createStore)(_reducers2.default); // import 'babel-polyfill'


(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_TopMenu2.default, null)
), document.getElementById('root'));