import React from 'react';

class MiniCart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
		  <div className="mod-index-cart fl-r">
        <a className="m-dropdown" href="/cart" target="_blank">
            <i className="icon cart"></i>
            <p className="title" role="cart">
                <em>购物车</em>
                <span className="m-label">
                    <span>18</span>
                    <i className="d-arrow"></i>
                </span>
                <i className="line"></i>
            </p>
            <i className="arrow"></i>
        </a>
        <div className="m-mini-cart-box">
	        <div className="content">
		        <h5 className="header">最近加入商品</h5>
		        <ul className="lists">
			        <li>
			        	<a target="_blank" href="">
			        		<div className="pic "><img src="" /></div>
			        		<div className="desc">
			        			<p className="title">埃美柯 128-168系列黄铜闸阀 DN50</p>
			        			<p className="sub">¥90.00 x1</p>
									</div>
								</a>
							</li>
						</ul>
						<div className="footer fix">
							<span>共<span className="total">18</span>件商品 共计¥ <span className="total-price">6530.30</span></span>
							<a className="button" href="/cart">去购物车</a>
						</div>
					</div>
				</div>
    	</div>
    )
  }
}

export default MiniCart;