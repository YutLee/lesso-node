"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _react2.default.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return _react2.default.createElement(
			"div",
			{ className: "mod-box" },
			_react2.default.createElement(
				"a",
				{ className: "logo", href: "/" },
				_react2.default.createElement("img", { src: "/public/img/logo.png" })
			),
			this.props.children
		);
	}
}

exports.default = Header;