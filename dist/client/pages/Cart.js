'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VisibleTopMenu = require('../containers/VisibleTopMenu');

var _VisibleTopMenu2 = _interopRequireDefault(_VisibleTopMenu);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _CartStep = require('../components/CartStep');

var _CartStep2 = _interopRequireDefault(_CartStep);

var _VisibleEmptyCart = require('../containers/VisibleEmptyCart');

var _VisibleEmptyCart2 = _interopRequireDefault(_VisibleEmptyCart);

var _RecommendCart = require('../components/RecommendCart');

var _RecommendCart2 = _interopRequireDefault(_RecommendCart);

var _FooterServer = require('../components/FooterServer');

var _FooterServer2 = _interopRequireDefault(_FooterServer);

var _FooterLinker = require('../components/FooterLinker');

var _FooterLinker2 = _interopRequireDefault(_FooterLinker);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cart = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_VisibleTopMenu2.default, null),
  _react2.default.createElement(
    _Header2.default,
    null,
    _react2.default.createElement(_CartStep2.default, { active: 1 })
  ),
  _react2.default.createElement('div', { style: { borderBottom: '3px solid #ff6700' } }),
  _react2.default.createElement(_VisibleEmptyCart2.default, null),
  _react2.default.createElement(_RecommendCart2.default, null),
  _react2.default.createElement(_FooterServer2.default, null),
  _react2.default.createElement(_FooterLinker2.default, null),
  _react2.default.createElement(_Footer2.default, null)
);

exports.default = Cart;