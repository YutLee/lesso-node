import React from 'react';

class FooterServer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
    	<div className="mod-service">
		    <ul className="lists mod-box flex">
	        <li className="item-1">
            <i className="icon"></i>
            <div className="desc">
              <p className="title">品类齐全</p>
              <p className="sub">覆盖五金电气建材各类商品</p>
            </div>
	        </li>
	        <li className="item-2">
            <i className="icon"></i>
            <div className="desc">
              <p className="title">正品保障</p>
              <p className="sub">一手品牌货源渠道</p>
            </div>
	        </li>
	        <li className="item-3">
            <i className="icon"></i>
            <div className="desc">
              <p className="title">高效配送</p>
              <p className="sub">便捷快速的物流体系</p>
            </div>
	        </li>
	        <li className="item-4">
            <i className="icon"></i>
            <div className="desc">
              <p className="title">省时间、省成本</p>
              <p className="sub">加快流转、降低成本</p>
            </div>
	        </li>
	        <li className="item-5">
            <i className="icon"></i>
            <div className="desc">
              <p className="title">售后保障</p>
              <p className="sub">完善的售后服务体系</p>
            </div>
	        </li>
		    </ul>
			</div>
    )
  }
}

export default FooterServer;