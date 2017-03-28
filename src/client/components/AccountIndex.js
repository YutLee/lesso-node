import React from 'react';
import '../styles/account-index';

class AccountIndex extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
	    customerName,
	    storeName,
	    realPhone,
	    lastLoginTime,
	    orderCount,
	    availablePoints,
	    cartCount
  	} = this.props;

  	// 对Date的扩展，将 Date 转化为指定格式的String
		// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
		// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
		// 例子：
		// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
		Date.prototype.Format = function (fmt) {
		    var o = {
		        "M+": this.getMonth() + 1, //月份
		        "d+": this.getDate(), //日
		        "h+": this.getHours(), //小时
		        "m+": this.getMinutes(), //分
		        "s+": this.getSeconds(), //秒
		        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
		        "S": this.getMilliseconds() //毫秒
		    };
		    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		    for (var k in o)
		    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		    return fmt;
		}

		return (
			<div className="mod-uc-r-box no-border">
				<div className="fix" style={{height: '209px'}}>
					<div className="m-uc-card-a fl-l">
						<div className="inner">
							<h4>待处理订单</h4>
							<p>你需要立即处理的订单</p>
						</div>
						<div className="footer fix">
							<a className="item" href="/account/orders?customOrderStatus=10">待报价 <strong>{orderCount.inProcessCountToPC}</strong></a>
							<a className="item" href="/account/orders?customOrderStatus=20">待支付 <strong>{orderCount.unConfirmedCount}</strong></a>
							<a className="item" href="/account/orders?customOrderStatus=30">交易中 <strong>{orderCount.tradingCount}</strong></a>
							<a className="item last" href="/account/orders?customOrderStatus=40">其他订单 <strong>{orderCount.doneCount}</strong></a>
						</div>
					</div>
					<div className="m-uc-card-a fl-l last">
						<div className="inner">
							<h4>买家信息提示</h4>
							<p>你需要关注的商品及处理事项</p>
						</div>
						<div className="footer fix">
							<a className="item three" href="account/points?type=10">积分 <strong>{availablePoints}</strong></a>
							<a className="item three" href="/account/co-vendors">合作商家 <strong>1</strong></a>
							<a className="item three last" href="/cart">我的购物车 <strong>{cartCount}</strong></a>
						</div>
					</div>
				</div>
				<div className="m-uc-card-b">
					<h5 className="title">{customerName}, 欢迎回来！ <span>上次登录时间：{new Date(lastLoginTime).Format('yyyy-MM-dd hh:mm:ss')}</span></h5>
					<div className="inner">
						<p>买家名称：{storeName}</p>
						<p> 联系人：{customerName}</p>
						<p>通讯地址：</p>
						<p>联系电话：{realPhone}</p>
					</div>
				</div>
				<div className="m-uc-card-c">
					<h5 className="title">平台联系方式</h5>
					<div className="inner">
						<p>客服热线：<em>400-930-2128</em></p>
						<p>招商热线：<strong>0757-23638570</strong></p>
						<p>联系人 ：周香云</p>
					</div>
				</div>
			</div>
		)
	}
}

export default AccountIndex;