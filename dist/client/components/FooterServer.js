'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FooterServer extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'mod-service' },
      _react2.default.createElement(
        'ul',
        { className: 'lists mod-box flex' },
        _react2.default.createElement(
          'li',
          { className: 'item-1' },
          _react2.default.createElement('i', { className: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'desc' },
            _react2.default.createElement(
              'p',
              { className: 'title' },
              '\u54C1\u7C7B\u9F50\u5168'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sub' },
              '\u8986\u76D6\u4E94\u91D1\u7535\u6C14\u5EFA\u6750\u5404\u7C7B\u5546\u54C1'
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'item-2' },
          _react2.default.createElement('i', { className: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'desc' },
            _react2.default.createElement(
              'p',
              { className: 'title' },
              '\u6B63\u54C1\u4FDD\u969C'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sub' },
              '\u4E00\u624B\u54C1\u724C\u8D27\u6E90\u6E20\u9053'
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'item-3' },
          _react2.default.createElement('i', { className: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'desc' },
            _react2.default.createElement(
              'p',
              { className: 'title' },
              '\u9AD8\u6548\u914D\u9001'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sub' },
              '\u4FBF\u6377\u5FEB\u901F\u7684\u7269\u6D41\u4F53\u7CFB'
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'item-4' },
          _react2.default.createElement('i', { className: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'desc' },
            _react2.default.createElement(
              'p',
              { className: 'title' },
              '\u7701\u65F6\u95F4\u3001\u7701\u6210\u672C'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sub' },
              '\u52A0\u5FEB\u6D41\u8F6C\u3001\u964D\u4F4E\u6210\u672C'
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'item-5' },
          _react2.default.createElement('i', { className: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'desc' },
            _react2.default.createElement(
              'p',
              { className: 'title' },
              '\u552E\u540E\u4FDD\u969C'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sub' },
              '\u5B8C\u5584\u7684\u552E\u540E\u670D\u52A1\u4F53\u7CFB'
            )
          )
        )
      )
    );
  }
}

exports.default = FooterServer;