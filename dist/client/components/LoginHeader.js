'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginHeader extends _react2.default.Component {
		constructor(props) {
				super(props);
		}

		render() {
				return _react2.default.createElement(
						'div',
						{ className: 'mod-box' },
						_react2.default.createElement(
								'a',
								{ href: '/' },
								_react2.default.createElement('img', { src: '/public/img/logo.png' })
						),
						_react2.default.createElement(
								'p',
								{ style: { marginTop: '55px', float: 'right' } },
								'\u5BA2\u670D\u70ED\u7EBF\uFF1A400-930-2128'
						)
				);
		}
}

exports.default = LoginHeader;