import React from 'react'
import { connect } from 'react-redux'

class LoginFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLogining: false};
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.setState({
      isLogining: true
    });
    console.log(this);
    setTimeout(() => {
      this.setState({isLogining: false});
    }, 2000);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" name="mobile" />
        <input type="password" name="password" />
        <button type="submit" disabled={this.state.isLogining}>登录</button>
      </form>
    )
  }
}

export default LoginFrom