'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react2.default.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'mod-footer' },
			_react2.default.createElement(
				'div',
				{ className: 'mod-box' },
				_react2.default.createElement(
					'p',
					{ className: 'link' },
					_react2.default.createElement(
						'a',
						{ href: '/' },
						'\u5173\u4E8E\u6211\u4EEC'
					),
					' | ',
					_react2.default.createElement(
						'a',
						{ href: '/' },
						'\u5E7F\u544A\u670D\u52A1'
					),
					' | ',
					_react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'http://www.miibeian.gov.cn', target: '_blank' },
							'\u7CA4ICP\u590714093582\u53F7'
						),
						' \u7CA4ICP\u8BC1B1.B2-20160109\u53F7'
					)
				),
				_react2.default.createElement(
					'p',
					null,
					'\u8054\u5851\u5546\u57CElessomall.com-\u4E94\u91D1\u7535\u6C14\u5EFA\u6750\u4EA4\u6613\u5E73\u53F0(\u4E2D\u56FD\u8054\u5851,\u9999\u6E2F\u4E0A\u5E02\u4EE3\u53F7:2128,\u8054\u5851\u5546\u57CE\u4E3A\u4E2D\u56FD\u8054\u5851\u65D7\u4E0B\u54C1\u724C)'
				),
				_react2.default.createElement(
					'p',
					null,
					'\xA9 2015-2017 lessomall.com All Rights Reserved. \u4F5B\u5C71\u5E02\u8054\u5851\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8'
				)
			)
		);
	}
}

exports.default = Footer;