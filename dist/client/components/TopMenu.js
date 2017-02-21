"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopMenu extends _react2.default.Component {

	constructor(props, context) {
		super(props, context);

		// console.log(this.props, this.context)
	}

	renderUser() {
		return this.props.customerName ? _react2.default.createElement(
			"p",
			{ className: "logout fl-l" },
			"\u60A8\u597D\uFF0C ",
			this.props.customerName,
			" [ ",
			_react2.default.createElement(
				"a",
				{ href: "/logout" },
				"\u9000\u51FA"
			),
			" ] "
		) : _react2.default.createElement(
			"p",
			{ className: "login fl-l" },
			"\u60A8\u597D\uFF0C \u6B22\u8FCE\u6765\u5230\u8054\u5851\u5546\u57CE\uFF01\u8BF7 [ ",
			_react2.default.createElement(
				"a",
				{ href: "/login" },
				"\u767B\u5F55"
			),
			" ] "
		);
	}

	render() {
		return _react2.default.createElement(
			"div",
			{ className: "mod-top-menu" },
			_react2.default.createElement(
				"div",
				{ className: "inner mod-box" },
				_react2.default.createElement(
					"a",
					{ className: "fl-l", href: "/", target: "_self" },
					"\u5546\u57CE\u9996\u9875"
				),
				this.renderUser(),
				_react2.default.createElement(
					"p",
					{ className: "phone fl-r" },
					"\u5BA2\u670D\u70ED\u7EBF: ",
					_react2.default.createElement(
						"span",
						null,
						"400-930-2128"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "m-dropdown fl-r" },
					_react2.default.createElement(
						"a",
						{ className: "title", target: "_blank", href: "/my-account/tutorial" },
						"\u5BA2\u670D/\u5E2E\u52A9"
					),
					_react2.default.createElement("i", { className: "arrow" })
				),
				_react2.default.createElement("div", { className: "line fl-r" }),
				_react2.default.createElement(
					"a",
					{ className: "button small fl-r", href: "/lots-web/user/login/", target: "_blank" },
					"\u514D\u8D39\u5F00\u5E97"
				),
				_react2.default.createElement(
					"div",
					{ className: "m-dropdown fl-r" },
					_react2.default.createElement("i", { className: "icon app" }),
					_react2.default.createElement(
						"a",
						{ className: "title", href: "javascript:void(0);" },
						"\u5356\u5BB6\u4E94\u91D1\u52A9\u624B"
					),
					_react2.default.createElement("i", { className: "arrow" }),
					_react2.default.createElement(
						"div",
						{ className: "content" },
						_react2.default.createElement("div", { className: "pic" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "m-dropdown fl-r" },
					_react2.default.createElement("i", { className: "icon sell" }),
					_react2.default.createElement(
						"a",
						{ className: "title", href: "/lots-web/user/login/", target: "_blank" },
						"\u5356\u5BB6\u4E2D\u5FC3"
					),
					_react2.default.createElement("i", { className: "arrow" })
				),
				_react2.default.createElement("div", { className: "line fl-r" }),
				_react2.default.createElement(
					"div",
					{ className: "m-dropdown fl-r" },
					_react2.default.createElement("i", { className: "icon wx" }),
					_react2.default.createElement(
						"a",
						{ className: "title", href: "javascript:void(0);" },
						"\u5FAE\u4FE1\u5FEB\u901F\u91C7\u8D2D"
					),
					_react2.default.createElement("i", { className: "arrow" }),
					_react2.default.createElement(
						"div",
						{ className: "content" },
						_react2.default.createElement("div", { className: "pic" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "m-dropdown fl-r" },
					_react2.default.createElement("i", { className: "icon buy" }),
					_react2.default.createElement(
						"a",
						{ className: "title", target: "_blank", href: "/my-account" },
						"\u4E70\u5BB6\u4E2D\u5FC3"
					),
					_react2.default.createElement("i", { className: "arrow" }),
					_react2.default.createElement(
						"div",
						{ className: "content" },
						_react2.default.createElement(
							"div",
							{ className: "lists" },
							_react2.default.createElement(
								"a",
								{ className: "item", target: "_blank", href: "/my-account/orders" },
								"\u6211\u7684\u8BA2\u5355"
							),
							_react2.default.createElement(
								"a",
								{ className: "item", target: "_blank", href: "/my-account/co-vendors" },
								"\u5408\u4F5C\u5546\u5BB6"
							)
						)
					)
				)
			)
		);
	}
}

exports.default = TopMenu;