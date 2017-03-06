import React from 'react';
import '../styles/nav';

class Nav extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="mod-nav-box">
	    	<div className="mod-nav-inner mod-box">
	        <ul className="mod-nav fix">
	          <li><a target="_blank" href="/">首页</a></li>
	          <li><a target="_blank" href="/categoriesIntro">品类</a></li>
	          <li><a target="_blank" href="/brands">品牌</a></li>
	          <li><i className="icon"></i><a target="_blank" href="/promo">促销</a></li>
	        </ul>
	        {this.props.children}
	    	</div>
			</div>
		)
	}
}

export default Nav;