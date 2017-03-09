'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _LoginHeader = require('../components/LoginHeader');

var _LoginHeader2 = _interopRequireDefault(_LoginHeader);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginFrom extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogining: false,
      mobile: '',
      password: ''
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.setState({
      isLogining: true
    });

    var body = { mobile: this.state.mobile, password: this.state.password };
    fetch('/login', {
      method: 'POST',
      credentials: 'same-origin', //同源发送cookie  或 'include' 总是发送cookie
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(res => {
      this.setState({ isLogining: false });
      res.message && alert(res.message);
      if (res.code == 200) {
        location.href = res.location;
      }
    }).catch(err => this.setState({ isLogining: false }));
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_LoginHeader2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'mod-box p-login' },
        _react2.default.createElement(
          'form',
          { className: 'mod-login-box fl-r', onSubmit: this.submit },
          _react2.default.createElement(
            'h2',
            { className: 'title' },
            '\u8054\u5851\u5546\u57CE\u4E70\u5BB6\u767B\u5F55'
          ),
          _react2.default.createElement(
            'label',
            { className: 'label' },
            '\u7528\u6237\u540D\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'm-input icon-input fix' },
            _react2.default.createElement('i', { className: 'icon user' }),
            _react2.default.createElement(
              'div',
              { className: 'box' },
              _react2.default.createElement('input', { type: 'text', name: 'mobile', value: this.state.mobile, onChange: this.change })
            )
          ),
          _react2.default.createElement(
            'label',
            { className: 'label' },
            '\u5BC6\u2003\u7801\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'm-input icon-input fix' },
            _react2.default.createElement('i', { className: 'icon pass' }),
            _react2.default.createElement(
              'div',
              { className: 'box' },
              _react2.default.createElement('input', { type: 'password', name: 'password', value: this.state.password, onChange: this.change })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'other-link' },
            _react2.default.createElement(
              'a',
              { href: '' },
              '\u5FD8\u8BB0\u767B\u5F55\u5BC6\u7801\uFF1F'
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'button brand', disabled: this.state.isLogining },
            '\u767B\u5F55'
          ),
          _react2.default.createElement(
            'p',
            { className: 'other-link' },
            _react2.default.createElement(
              'a',
              { href: '' },
              '\u5356\u5BB6\u767B\u5F55'
            ),
            ' | ',
            _react2.default.createElement(
              'a',
              { href: '' },
              '\u4E70\u5BB6\u6CE8\u518C'
            )
          )
        )
      ),
      _react2.default.createElement(_Footer2.default, null)
    );
  }
}
// import fetch from 'isomorphic-fetch'
exports.default = LoginFrom;