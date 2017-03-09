'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VisibleTopMenu = require('../containers/VisibleTopMenu');

var _VisibleTopMenu2 = _interopRequireDefault(_VisibleTopMenu);

var _VisibleCategory = require('../containers/VisibleCategory');

var _VisibleCategory2 = _interopRequireDefault(_VisibleCategory);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _SearchBar = require('../components/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _MiniCart = require('../components/MiniCart');

var _MiniCart2 = _interopRequireDefault(_MiniCart);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _IndexBigBanner = require('../components/IndexBigBanner');

var _IndexBigBanner2 = _interopRequireDefault(_IndexBigBanner);

var _VisibleQuickEnter = require('../containers/VisibleQuickEnter');

var _VisibleQuickEnter2 = _interopRequireDefault(_VisibleQuickEnter);

var _FooterServer = require('../components/FooterServer');

var _FooterServer2 = _interopRequireDefault(_FooterServer);

var _FooterLinker = require('../components/FooterLinker');

var _FooterLinker2 = _interopRequireDefault(_FooterLinker);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Index = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_VisibleTopMenu2.default, null),
  _react2.default.createElement(
    _Header2.default,
    null,
    _react2.default.createElement(_MiniCart2.default, null),
    _react2.default.createElement(_SearchBar2.default, null)
  ),
  _react2.default.createElement(
    _Nav2.default,
    null,
    _react2.default.createElement(_VisibleCategory2.default, null)
  ),
  _react2.default.createElement(
    _IndexBigBanner2.default,
    null,
    _react2.default.createElement(_VisibleQuickEnter2.default, null)
  ),
  _react2.default.createElement(_FooterServer2.default, null),
  _react2.default.createElement(_FooterLinker2.default, null),
  _react2.default.createElement(_Footer2.default, null)
);

exports.default = Index;