import React from 'react';

class TopMenu extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    	userName: '登录'
    }
  }

  renderUser() {
  	return (
  		this.props.customerName ?
  			<p className="logout fl-l">您好， {this.props.customerName} [ <a href="/logout">退出</a> ] </p> :
  			<p className="login fl-l">您好， 欢迎来到联塑商城！请 [ <a href="/login">登录</a> ] </p>
  	)
  }

	render() {
		return (
			<div className="mod-top-menu">
				<div className="inner mod-box">
	        <a className="fl-l" href="/" target="_self">商城首页</a>
	        {this.renderUser()}
	        <p className="phone fl-r">客服热线: <span>400-930-2128</span></p>
	        <div className="m-dropdown fl-r">
	            <a className="title" target="_blank" href="/my-account/tutorial">客服/帮助</a>
	            <i className="arrow"></i>
	        </div>
	        <div className="line fl-r"></div>
	        <a className="button small fl-r" href="/lots-web/user/login/" target="_blank">免费开店</a>
	        <div className="m-dropdown fl-r">
	            <i className="icon app"></i>
	            <a className="title" href="javascript:void(0);">卖家五金助手</a>
	            <i className="arrow"></i>
	            <div className="content">
	                <div className="pic">
	                    {/*<img src="/_ui/desktop/v3/app/build/img/tradingSystemAppQrcode.png" />*/}
	                </div>
	            </div>
	        </div>
	        <div className="m-dropdown fl-r">
	            <i className="icon sell"></i>
	            <a className="title" href="/lots-web/user/login/" target="_blank">卖家中心</a>
	            <i className="arrow"></i>
	        </div>
	        <div className="line fl-r"></div>
	        <div className="m-dropdown fl-r">
	            <i className="icon wx"></i>
	            <a className="title" href="javascript:void(0);">微信快速采购</a>
	            <i className="arrow"></i>
	            <div className="content">
	                <div className="pic">
	                    {/*<img src="/_ui/desktop/v3/app/build/img/code.png" />*/}
	                </div>
	            </div>
	        </div>
	        <div className="m-dropdown fl-r">
	            <i className="icon buy"></i>
	            <a className="title" target="_blank" href="/my-account">买家中心</a>
	            <i className="arrow"></i>
	            <div className="content">
	                <div className="lists">
	                    <a className="item" target="_blank" href="/my-account/orders">我的订单</a>
	                    <a className="item" target="_blank" href="/my-account/co-vendors">合作商家</a>
	                </div>
	            </div>
	        </div>
	    	</div>
    	</div>
		)
	}
}

export default TopMenu;