import React from 'react';
import '../styles/account-nav';

class AccountNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon(router) {
  	return this.props.router == router && <i className="icon"></i>
  }

  render() {
    return (
      <dl className="mod-uc-menu fl-l">
				<dt><a className="on" href="/account"><i className="icon"></i>用户中心首页</a></dt>
				<dd><a href="/cart">我的购物车</a></dd>
				<dd><a href="/account/orders">我的订单</a></dd>
				<dd><a href="/account/points?type=10">账户积分</a></dd>
				<dd><a href="/account/addresses">收货地址</a></dd>
				<dd><a href="/account/co-vendors">合作商家</a></dd>
				<dd><a href="/account/tutorial">使用教程</a></dd>
				<dd><a href="/account/detail">账户信息</a></dd>
				<dd><a href="/account/password-change">修改密码</a></dd>
				<dd><a href="/account/quickPayRegister">快捷支付</a></dd>
			</dl>
    )
  }
}

export default AccountNav;
