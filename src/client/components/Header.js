import React from 'react';
import SearchBar from './SearchBar';
import MiniCart from './MiniCart';

class Header extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="mod-box">
        <a href="/"><img src="/public/img/logo.png" /></a>
        <MiniCart />
        <SearchBar />
      </div>
		)
	}
}

export default Header;