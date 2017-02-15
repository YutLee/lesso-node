import React from 'react';
import { connect } from 'react-redux';
// import fetch from 'isomorphic-fetch'
import LoginHeader from '../components/LoginHeader';
import Footer from '../components/Footer';

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
        credentials: 'same-origin',//同源发送cookie  或 'include' 总是发送cookie
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
      <div>
        <LoginHeader/>
        <div className="mod-box p-login">
          <form className="mod-login-box fl-r" onSubmit={this.submit}>
            <h2 className="title">联塑商城买家登录</h2>
            <label className="label">用户名：</label>
            <div className="m-input icon-input fix">
              <i className="icon user"></i>
              <div className="box">
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.change} />
              </div>
            </div>
            <label className="label">密&emsp;码：</label>
            <div className="m-input icon-input fix">
              <i className="icon pass"></i>
              <div className="box">
                <input type="password" name="password" value={this.state.password} onChange={this.change} />
              </div>
            </div>
            <p className="other-link"><a href="">忘记登录密码？</a></p>
            <button type="submit" className="button brand" disabled={this.state.isLogining}>登录</button>
            <p className="other-link"><a href="">卖家登录</a> | <a href="">买家注册</a></p>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default LoginFrom