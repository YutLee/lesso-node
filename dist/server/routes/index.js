'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRender = require('../reactRender');

var _reactRender2 = _interopRequireDefault(_reactRender);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _Index = require('../../client/pages/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', _category2.default, function (req, res, next) {
	const preloadedState = {
		customerName: req.session.customerName || '',
		category: req.category
	};
	const { initialState, html } = (0, _reactRender2.default)(_Index2.default, preloadedState);
	res.render('index/index', { title: 'index', html: html, initialState: initialState });
});

exports.default = router;