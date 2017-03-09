'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CartStep extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'ul',
      { className: 'mod-cart-step fix fl-r' },
      _react2.default.createElement(
        'li',
        { className: this.props.active == 1 ? 'item active' : 'item' },
        _react2.default.createElement('i', { className: 'line' }),
        _react2.default.createElement(
          'span',
          { className: 'step' },
          '1'
        ),
        _react2.default.createElement(
          'p',
          { className: 'title' },
          '1.\u6211\u7684\u8D2D\u7269\u8F66'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: this.props.active == 2 ? 'item active' : 'item' },
        _react2.default.createElement('i', { className: 'line' }),
        _react2.default.createElement(
          'span',
          { className: 'step' },
          '2'
        ),
        _react2.default.createElement(
          'p',
          { className: 'title' },
          '2.\u586B\u5199\u6838\u5BF9\u8BA2\u5355\u4FE1\u606F'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: this.props.active == 3 ? 'item active' : 'item' },
        _react2.default.createElement('i', { className: 'line' }),
        _react2.default.createElement(
          'span',
          { className: 'step' },
          '3'
        ),
        _react2.default.createElement(
          'p',
          { className: 'title' },
          '3.\u6210\u529F\u63D0\u4EA4\u8BA2\u5355'
        )
      )
    );
  }
}

exports.default = CartStep;