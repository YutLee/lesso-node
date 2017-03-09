'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuickEnter extends _react2.default.Component {

	constructor(props) {
		super(props);
	}

	renderUser() {
		return this.props.customerName ? _react2.default.createElement(
			'div',
			{ className: 'signin user' },
			_react2.default.createElement('a', { className: 'pic', href: 'javascript:void(0);' }),
			_react2.default.createElement(
				'p',
				null,
				'Hi\uFF0C'
			),
			_react2.default.createElement(
				'p',
				null,
				this.props.customerName
			),
			_react2.default.createElement(
				'p',
				null,
				'\u6B22\u8FCE\u5149\u4E34\u8054\u5851\u5546\u57CE'
			),
			_react2.default.createElement(
				'a',
				{ className: 'button brand', href: '/logout' },
				'\u9000\u51FA'
			)
		) : _react2.default.createElement(
			'div',
			{ className: 'signin' },
			_react2.default.createElement('a', { className: 'pic', href: 'javascript:void(0);' }),
			_react2.default.createElement(
				'p',
				null,
				'Hi\uFF0C\u4F60\u597D'
			),
			_react2.default.createElement(
				'p',
				null,
				'\u6B22\u8FCE\u5149\u4E34\u8054\u5851\u5546\u57CE',
				_react2.default.createElement('br', null),
				'\u91C7\u8D2D\u5546\u54C1\u8BF7\u5148\u767B\u5F55'
			),
			_react2.default.createElement(
				'a',
				{ className: 'button brand', href: '/login' },
				'\u767B\u5F55'
			),
			_react2.default.createElement(
				'div',
				{ className: 'signup' },
				_react2.default.createElement(
					'a',
					{ href: '/lots-web/register/?type=3' },
					'\u6CE8\u518C'
				),
				_react2.default.createElement('i', { className: 'line' }),
				_react2.default.createElement(
					'a',
					{ href: '/lots-web/user/login/' },
					'\u5F00\u5E97'
				)
			)
		);
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'mod-box', style: { position: 'relative' } },
			_react2.default.createElement(
				'div',
				{ className: 'mod-quick-enter' },
				this.renderUser(),
				_react2.default.createElement(
					'div',
					{ className: 'other-enter' },
					_react2.default.createElement('i', { className: 'icon wx' }),
					_react2.default.createElement(
						'p',
						null,
						'\u5FAE\u4FE1\u5FEB\u901F\u91C7\u8D2D'
					),
					_react2.default.createElement('img', { className: 'pic', src: '/public/img/wxqrcode.png' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'other-enter' },
					_react2.default.createElement('i', { className: 'icon app' }),
					_react2.default.createElement(
						'p',
						null,
						'\u5356\u5BB6\u4E94\u91D1\u52A9\u624B'
					),
					_react2.default.createElement('img', { className: 'pic', src: '/public/img/wjqrcode.png' })
				)
			)
		);
	}
}

exports.default = QuickEnter;