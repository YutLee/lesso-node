import React from 'react';
import '../styles/quick-enter';
import '../images/img/wjqrcode';
import '../images/img/wxqrcode';

class QuickEnter extends React.Component {

	constructor(props) {
    super(props);
  }

  renderUser() {
  	return (
  		this.props.customerName ?
				<div className="signin user">
					<a className="pic" href="javascript:void(0);">
						{/*<img data-original="/_ui/desktop/v3/app/build/img/icon-user-pic.png" src="/_ui/desktop/v3/app/build/img/icon-user-pic.png" style="display: inline;">*/}
					</a>
					<p>Hi，</p>
					<p>{this.props.customerName}</p>
					<p>欢迎光临联塑商城</p>
					<a className="button brand" href="/logout">退出</a>
				</div>
				:
				<div className="signin">
					<a className="pic" href="javascript:void(0);"></a>
					<p>Hi，你好</p>
					<p>欢迎光临联塑商城<br/>采购商品请先登录</p>
					<a className="button brand" href="/login">登录</a>
					<div className="signup">
						<a href="/lots-web/register/?type=3">注册</a><i className="line"></i><a href="/lots-web/user/login/">开店</a>
					</div>
				</div>
  	)
  }

	render() {
		return (
			<div className="mod-box" style={{position:'relative'}}>
				<div className="mod-quick-enter">
					{this.renderUser()}
					<div className="other-enter">
						<i className="icon wx"></i>
						<p>微信快速采购</p>
						<img className="pic" src="/public/img/wxqrcode.png" />
					</div>
					<div className="other-enter">
						<i className="icon app"></i>
						<p>卖家五金助手</p>
						<img className="pic" src="/public/img/wjqrcode.png" />
					</div>
				</div>
			</div>
		)
	}
}

export default QuickEnter;