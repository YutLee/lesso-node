import React from 'react';

class FooterLinker extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
    	<div className="mod-more-service fix">
		    <div className="mod-box">
	        <div className="more-link fix fl-l">
            <dl>
              <dt>新手指南</dt>
              <dd><a href="/info/introduction/aboutMall" target="_blank">了解商城</a></dd>
              <dd><a href="/info/introduction/memberRegistration" target="_blank">会员注册</a></dd>
              <dd><a href="/info/introduction/shoppingProcess" target="_blank">购物流程</a></dd>
              <dd><a href="/info/introduction/applicationForm" target="_blank">申请合作</a></dd>
              <dd><a href="/info/introduction/customerService" target="_blank">联系客服</a></dd>
            </dl>
            <dl>
              <dt>支付方式</dt>
              <dd><a href="/info/introduction/payOnDelivery" target="_blank">货到付款</a></dd>
              <dd><a href="/info/introduction/onlinePay" target="_blank">在线支付</a></dd>
              <dd><a href="/info/introduction/offlineTransfer" target="_blank">线下转账</a></dd>
            </dl>
            <dl>
              <dt>售后服务</dt>
              <dd><a href="/info/introduction/afterSalesPolicy" target="_blank">售后政策</a></dd>
              <dd><a href="/info/introduction/refundWay" target="_blank">退款方式</a></dd>
              <dd><a href="/info/introduction/returnProcess" target="_blank">退换货流程</a></dd>
            </dl>
            <dl>
              <dt>特色服务</dt>
              <dd><a href="/info/introduction/offlineEvent" target="_blank">线下展会</a></dd>
              <dd><a href="/info/introduction/hardwareTradingAssistant" target="_blank">五金交易助手</a></dd>
              <dd><a href="/info/introduction/weChatPublicOrder" target="_blank">微信公众号下单</a></dd>
            </dl>
            <dl className="last">
              <dt>网站声明</dt>
              <dd><a href="/info/introduction/privacyStatement" target="_blank">隐私声明</a></dd>
              <dd><a href="/info/introduction/legalNotice" target="_blank">法律声明</a></dd>
            </dl>
            <dl className="last">
              <dt>加盟联塑商城</dt>
              <dd><a href="/info/introduction/onlineMerchants" target="_blank">线上招商</a></dd>
              <dd><a href="/info/introduction/offlineJoin" target="_blank">线下加盟</a></dd>
            </dl>
	        </div>
	        <div className="m-hf-wx-code fl-l">
            <img style={{width:'154px',height:'154px'}} src="/public/img/wxqrcode.png" />
            <p>关注联塑商城微信公众号</p>
	        </div>
	        <div className="m-hf-phone fl-l">
            <h6>服务热线</h6>
            <p><strong>400-930-2128</strong></p>
            {/*<h6>招商热线(周小姐):</h6>
            <p><span>0757-23638570</span></p>*/}
            <div className="focus">
            	{/*<a href=""><i className="icon weibo"></i>关注微博</a>*/}
              <a href=""><i className="icon"></i>关注微信</a>
            </div>
	        </div>
		    </div>
			</div>
    )
  }
}

export default FooterLinker;