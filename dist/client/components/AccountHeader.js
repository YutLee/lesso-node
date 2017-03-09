'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AccountHeader extends _react2.default.Component {
		constructor(props) {
				super(props);
		}

		renderIcon(router) {
				return this.props.router == router && _react2.default.createElement('i', { className: 'icon' });
		}

		render() {
				return _react2.default.createElement(
						'div',
						{ className: 'mod-uc-header' },
						_react2.default.createElement(
								'div',
								{ className: 'mod-box fix' },
								_react2.default.createElement(
										'a',
										{ className: 'logo fl-l', href: 'javascript:void(0);' },
										'\u6211\u7684\u8054\u5851'
								),
								_react2.default.createElement(
										'ul',
										{ className: 'm-uc-nav fl-l fix' },
										_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
														'a',
														{ href: '/' },
														'\u5546\u57CE\u9996\u9875'
												)
										),
										_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
														'a',
														{ href: '/account' },
														'\u6B22\u8FCE\u9875'
												),
												this.renderIcon('account')
										),
										_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
														'a',
														{ href: '/account/orders' },
														'\u6211\u7684\u8BA2\u5355'
												),
												this.renderIcon('orders')
										),
										_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
														'a',
														{ href: '/account/info' },
														'\u4E2A\u4EBA\u8D44\u6599'
												),
												this.renderIcon('info')
										),
										_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
														'a',
														{ href: '/account/address' },
														'\u6536\u8D27\u5730\u5740'
												),
												this.renderIcon('address')
										)
								),
								_react2.default.createElement(
										'form',
										{ className: 'm-uc-search fix fl-r' },
										_react2.default.createElement(
												'button',
												{ className: 'button', type: 'submit' },
												'\u641C\u7D22'
										),
										_react2.default.createElement(
												'div',
												{ className: 'input' },
												_react2.default.createElement('i', { className: 'icon' }),
												_react2.default.createElement('input', { type: 'text', placeholder: '' })
										)
								)
						)
				);
		}
}

exports.default = AccountHeader;