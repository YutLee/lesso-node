'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MiniCart extends _react2.default.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'mod-index-cart fl-r' },
			_react2.default.createElement(
				'a',
				{ className: 'm-dropdown', href: '/cart', target: '_blank' },
				_react2.default.createElement('i', { className: 'icon cart' }),
				_react2.default.createElement(
					'p',
					{ className: 'title', role: 'cart' },
					_react2.default.createElement(
						'em',
						null,
						'\u8D2D\u7269\u8F66'
					),
					_react2.default.createElement(
						'span',
						{ className: 'm-label' },
						_react2.default.createElement(
							'span',
							null,
							'18'
						),
						_react2.default.createElement('i', { className: 'd-arrow' })
					),
					_react2.default.createElement('i', { className: 'line' })
				),
				_react2.default.createElement('i', { className: 'arrow' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'm-mini-cart-box' },
				_react2.default.createElement(
					'div',
					{ className: 'content' },
					_react2.default.createElement(
						'h5',
						{ className: 'header' },
						'\u6700\u8FD1\u52A0\u5165\u5546\u54C1'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'lists' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ target: '_blank', href: '' },
								_react2.default.createElement(
									'div',
									{ className: 'pic ' },
									_react2.default.createElement('img', { src: '' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'desc' },
									_react2.default.createElement(
										'p',
										{ className: 'title' },
										'\u57C3\u7F8E\u67EF 128-168\u7CFB\u5217\u9EC4\u94DC\u95F8\u9600 DN50'
									),
									_react2.default.createElement(
										'p',
										{ className: 'sub' },
										'\xA590.00 x1'
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'footer fix' },
						_react2.default.createElement(
							'span',
							null,
							'\u5171',
							_react2.default.createElement(
								'span',
								{ className: 'total' },
								'18'
							),
							'\u4EF6\u5546\u54C1\u2003\u5171\u8BA1\xA5 ',
							_react2.default.createElement(
								'span',
								{ className: 'total-price' },
								'6530.30'
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'button', href: '/cart' },
							'\u53BB\u8D2D\u7269\u8F66'
						)
					)
				)
			)
		);
	}
}

exports.default = MiniCart;