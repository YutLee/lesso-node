import React from 'react';
import '../styles/account-header';

class AccountHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon(router) {
  	return this.props.router == router && <i className="icon"></i>
  }

  render() {
    return (
      <div className="mod-uc-header">
				<div className="mod-box fix">
					<a className="logo fl-l" href="javascript:void(0);">我的联塑</a>
					<ul className="m-uc-nav fl-l fix">
						<li><a href="/">商城首页</a></li>
						<li><a href="/account">欢迎页</a>{this.renderIcon('account')}</li>
						<li><a href="/account/orders">我的订单</a>{this.renderIcon('orders')}</li>
						<li><a href="/account/info">个人资料</a>{this.renderIcon('info')}</li>
						<li><a href="/account/address">收货地址</a>{this.renderIcon('address')}</li>
					</ul>
					<form className="m-uc-search fix fl-r">
						<button className="button" type="submit">搜索</button>
						<div className="input">
							<i className="icon"></i>
							<input type="text" placeholder="" />
						</div>
					</form>
				</div>
			</div>
    )
  }
}

export default AccountHeader;
