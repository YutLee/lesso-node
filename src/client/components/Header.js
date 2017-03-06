import React from 'react';
import '../styles/common';

class Header extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="mod-box">
        <a className="logo" href="/"><img src="/public/img/logo.png" /></a>
        {this.props.children}
      </div>
		)
	}
}

export default Header;