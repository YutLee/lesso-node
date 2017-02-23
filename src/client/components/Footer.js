import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
    	<div className="mod-footer">
			  <div className="mod-box">
					<p className="link">
						<a href="/">关于我们</a> | <a href="/">广告服务</a> | <span><a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备14093582号</a> 粤ICP证B1.B2-20160109号</span>
					</p>
					<p>联塑商城lessomall.com-五金电气建材交易平台(中国联塑,香港上市代号:2128,联塑商城为中国联塑旗下品牌)</p>
					<p>© 2015-2017 lessomall.com All Rights Reserved. 佛山市联塑电子商务有限公司</p>
			  </div>
			</div>
    )
  }
}

export default Footer;