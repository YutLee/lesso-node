'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = () => _react2.default.createElement('div', null);

function reactRender(App = app, preloadedState = {}, Reducer) {
  function reducer(state = preloadedState) {
    return Object.assign({}, state);
  }

  const store = Reducer ? (0, _redux.createStore)(Reducer, preloadedState) : (0, _redux.createStore)(reducer);
  // 把组件渲染成字符串
  const initialState = JSON.stringify(store.getState() || {});

  // 把组件渲染成字符串
  const html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(App, null)
  ));

  return { initialState, html };
}

exports.default = reactRender;