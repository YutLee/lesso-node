import React from 'react';
import '../styles/account-nav';

class AccountNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderActive(router) {
  	return this.props.router == router ? 'on' : '';
  }

  render() {
    return (
      <dl className="mod-uc-menu fl-l">
				<dt><a className={this.renderActive('account')} href="/account"><i className="icon"></i>用户中心首页</a></dt>
				<dd><a className={this.renderActive('cart')} href="/cart">我的购物车</a></dd>
				<dd><a className={this.renderActive('orders')} href="/account/orders">我的订单</a></dd>
				<dd><a className={this.renderActive('points')} href="/account/points">账户积分</a></dd>
				<dd><a className={this.renderActive('address')} href="/account/address">收货地址</a></dd>
				<dd><a className={this.renderActive('co-vendors')} href="/account/co-vendors">合作商家</a></dd>
				<dd><a className={this.renderActive('tutorial')} href="/account/tutorial">使用教程</a></dd>
				<dd><a className={this.renderActive('info')} href="/account/info">账户信息</a></dd>
				<dd><a className={this.renderActive('password-change')} href="/account/password-change">修改密码</a></dd>
				<dd><a className={this.renderActive('quick-pay')} href="/account/quick-pay">快捷支付</a></dd>
			</dl>
    )
  }
}

export default AccountNav;
