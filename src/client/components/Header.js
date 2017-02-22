import React from 'react';
import SearchBar from './SearchBar';
import MiniCart from './MiniCart';

class Header extends React.Component {

	constructor(props) {
    super(props);
  }

  renderUser() {
  	return (
  		this.props.customerName ?
  			<p className="logout fl-l">您好， <a href="/my-account" target="_blank" className="username" title={this.props.customerName}>{this.props.customerName}</a> [ <a href="/logout">退出</a> ] </p> :
  			<p className="login fl-l">您好， 欢迎来到联塑商城！请 [ <a href="/login">登录</a> ] </p>
  	)
  }

	render() {
		return (
			<div className="mod-box">
        <a href="/"><img src="/public/img/logo.png" /></a>
        <MiniCart />
        <SearchBar />
      </div>
		)
	}
}

export default Header;