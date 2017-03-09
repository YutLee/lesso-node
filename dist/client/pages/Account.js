'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VisibleTopMenu = require('../containers/VisibleTopMenu');

var _VisibleTopMenu2 = _interopRequireDefault(_VisibleTopMenu);

var _AccountHeader = require('../components/AccountHeader');

var _AccountHeader2 = _interopRequireDefault(_AccountHeader);

var _FooterServer = require('../components/FooterServer');

var _FooterServer2 = _interopRequireDefault(_FooterServer);

var _FooterLinker = require('../components/FooterLinker');

var _FooterLinker2 = _interopRequireDefault(_FooterLinker);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Account = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_VisibleTopMenu2.default, null),
  _react2.default.createElement(_AccountHeader2.default, { router: 'account' }),
  _react2.default.createElement(_FooterServer2.default, null),
  _react2.default.createElement(_FooterLinker2.default, null),
  _react2.default.createElement(_Footer2.default, null)
);

exports.default = Account;