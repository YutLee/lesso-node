import React from 'react';
import { connect } from 'react-redux';
// import fetch from 'isomorphic-fetch'

class LoginFrom extends React.Component {
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
        credentials: 'same-origin',//enable cookie
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({isLogining: false});
        res.message && alert(res.message);
        if(res.code == 200) {
          location.href = res.location;
        }
      })
      .catch(err => this.setState({isLogining: false}));
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" name="mobile" value={this.state.mobile} onChange={this.change} />
        <input type="password" name="password" value={this.state.password} onChange={this.change} />
        <button type="submit" disabled={this.state.isLogining}>登录</button>
      </form>
    )
  }
}

export default LoginFrom