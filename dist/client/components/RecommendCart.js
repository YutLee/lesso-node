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
      { className: 'mod-recommend-cart mod-box' },
      _react2.default.createElement(
        'h4',
        { className: 'header' },
        '\u6700\u8FD1\u6D4F\u89C8'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'list fix' },
        _react2.default.createElement(
          'li',
          { className: 'item' },
          _react2.default.createElement(
            'a',
            { className: 'pic', href: '', title: '', target: '_blank' },
            _react2.default.createElement('img', { src: '', alt: '' })
          ),
          _react2.default.createElement(
            'a',
            { className: 'title', href: '', title: '', target: '_blank' },
            '\u98DE\u65CB\u724C \u4E09\u89D2\u5E26A1350mm'
          ),
          _react2.default.createElement(
            'div',
            { className: 'other fix' },
            _react2.default.createElement(
              'p',
              { className: 'price' },
              '\xA5',
              _react2.default.createElement(
                'span',
                null,
                '6'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'quantity' },
              '\u22651\u6761'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'add-to-cart', href: '/login' },
            '\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66'
          )
        )
      )
    );
  }
}

exports.default = EmptyCart;