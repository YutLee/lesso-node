'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRender = require('../reactRender');

var _reactRender2 = _interopRequireDefault(_reactRender);

var _VisibleTopMenu = require('../../client/containers/VisibleTopMenu');

var _VisibleTopMenu2 = _interopRequireDefault(_VisibleTopMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', function (req, res, next) {
	const preloadedState = { customerName: req.session.customerName || '' };
	const { initialState, html } = (0, _reactRender2.default)(_VisibleTopMenu2.default, preloadedState);
	res.render('index/index', { title: 'index', html: html, initialState: initialState });
});

exports.default = router;