'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRender = require('../reactRender');

var _reactRender2 = _interopRequireDefault(_reactRender);

var _reducers = require('../../client/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('../../client/components/App');

var _App2 = _interopRequireDefault(_App);

var _auth = require('./users/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

/* GET home page. */
router.get('/', _auth2.default, function (req, res, next) {
  // console.log(req.session.user);
  const { initialState, html } = (0, _reactRender2.default)(_reducers2.default, _App2.default);
  res.render('index/index', { title: 'index', html: html, initialState: JSON.stringify(initialState) });
});

exports.default = router;