'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EmptyCart extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'mod-empty-cart mod-box' },
      _react2.default.createElement('i', { className: 'icon' }),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'h2',
          null,
          '\u8D2D\u7269\u8F66\u8FD8\u6CA1\u6709\u5546\u54C1\uFF0C\u53BB\u770B\u770B\u5FC3\u4EEA\u7684\u5546\u54C1\u5427'
        ),
        !this.props.customerName && _react2.default.createElement(
          'a',
          { className: 'button brand', href: '/login' },
          '\u767B\u5F55'
        ),
        _react2.default.createElement(
          'a',
          { href: '/' },
          '\u53BB\u8D2D\u7269>'
        )
      )
    );
  }
}

exports.default = EmptyCart;