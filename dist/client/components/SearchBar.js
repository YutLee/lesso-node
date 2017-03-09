'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'mod-search-box fl-r' },
      _react2.default.createElement(
        'ul',
        { className: 'tab fix' },
        _react2.default.createElement(
          'li',
          { className: 'on' },
          '\u5546\u54C1'
        ),
        _react2.default.createElement(
          'li',
          { className: 'innershops' },
          '\u5E97\u94FA'
        )
      ),
      _react2.default.createElement(
        'form',
        { className: 'fix' },
        _react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u5B57', value: '' }),
        _react2.default.createElement('span', { className: 'search-history' }),
        _react2.default.createElement(
          'button',
          { className: 'button', type: 'submit' },
          _react2.default.createElement('i', { className: 'icon' }),
          '\u641C\u7D22'
        )
      )
    );
  }
}

exports.default = SearchBar;