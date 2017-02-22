import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
		  <div className="mod-search-box fl-r">
        <ul className="tab fix">
            <li className="on">商品</li>
            <li className="innershops">店铺</li>
        </ul>
        <form className="fix">
            <input type="text" placeholder="请输入关键字" value="" />
            <span className="search-history"></span>
            <button className="button" type="submit"><i className="icon"></i>搜索</button>
        </form>
    	</div>
    )
  }
}

export default SearchBar;