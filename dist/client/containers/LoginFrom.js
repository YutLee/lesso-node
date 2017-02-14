'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fetch from 'isomorphic-fetch'

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
      credentials: 'same-origin', //enable cookie
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
      'form',
      { onSubmit: this.submit },
      _react2.default.createElement('input', { type: 'text', name: 'mobile', value: this.state.mobile, onChange: this.change }),
      _react2.default.createElement('input', { type: 'password', name: 'password', value: this.state.password, onChange: this.change }),
      _react2.default.createElement(
        'button',
        { type: 'submit', disabled: this.state.isLogining },
        '\u767B\u5F55'
      )
    );
  }
}

exports.default = LoginFrom;