import React from 'react';
import '../styles/common';
import '../images/img/logo.png';

class LoginHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
		  <div className="mod-box">
				<a href="/"><img src="/public/img/logo.png" /></a>
				<p style={{marginTop: '55px', float:'right'}}>客服热线：400-930-2128</p>
		  </div>
    )
  }
}

export default LoginHeader;