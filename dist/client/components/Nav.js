'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nav extends _react2.default.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'mod-nav-box' },
			_react2.default.createElement(
				'div',
				{ className: 'mod-nav-inner mod-box' },
				_react2.default.createElement(
					'ul',
					{ className: 'mod-nav fix' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ target: '_blank', href: '/' },
							'\u9996\u9875'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ target: '_blank', href: '/categoriesIntro' },
							'\u54C1\u7C7B'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ target: '_blank', href: '/brands' },
							'\u54C1\u724C'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', { className: 'icon' }),
						_react2.default.createElement(
							'a',
							{ target: '_blank', href: '/promo' },
							'\u4FC3\u9500'
						)
					)
				),
				this.props.children
			)
		);
	}
}

exports.default = Nav;