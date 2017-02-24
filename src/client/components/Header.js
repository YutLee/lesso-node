import React from 'react';

class Header extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="mod-box">
        <a href="/"><img src="/public/img/logo.png" /></a>
        {this.props.children}
      </div>
		)
	}
}

export default Header;