import React from 'react';
import '../styles/category';
import '../images/img/icon-cate.png';

class Category extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    	show: [],
    	isOnPanels: false,
    	isPanelsShow: false
    };

    let seft = this;

    ['handleEnter', 'handleLeave', 'handlePanelsEnter', 'handlePanelsLeave'].forEach(function(handler) {
    	seft[handler] = seft[handler].bind(seft);
    });
  }

  handleEnter(e) {
  	// e.stopPropagation();
   //  e.nativeEvent.stopImmediatePropagation();
  	this.timer && clearTimeout(this.timer);
  	let idx = e.currentTarget.getAttribute('data-index');
  	let show = [];
  	show[idx] = {isOpen: true};
  	this.setState({
  		show: show,
  		isOnPanels: false,
  		isPanelsShow: true
  	});
  }

  handleLeave(e) {
  	// e.stopPropagation();
  	// e.preventDefault()
  	this.timer && clearTimeout(this.timer);
  	this.timer = setTimeout(() => {
  		if(this.state.isOnPanels) return;
	  	this.setState({
	  		show: [],
	  		isOnPanels: false,
	  		isPanelsShow: false
	  	});
  	}, 100)
  }

  handlePanelsEnter(e) {
  	e.stopPropagation();
  	this.timer && clearTimeout(this.timer);
  	// this.setState({
  	// 	isOnPanels: true
  	// });
  }

  handlePanelsLeave(e) {
  	e.stopPropagation();
  	this.timer && clearTimeout(this.timer);
  	this.setState({
  		show: [],
  		isOnPanels: false,
  		isPanelsShow: false
  	});
  }

	render() {
		const { category } = this.props;
		const lists = category.map((cate, index) => {
			if(index == 15) return null;

			const list = cate.subCategory.map((item, idx) => <a key={item.code} target="_blank" href={'/c/' + item.code} title={item.name}>{item.name}</a>);

			let isOpen = this.state.show && this.state.show[index] && this.state.show[index].isOpen;

			return (
				<li key={cate.code} className={isOpen ? 'chose item-' + cate.code : 'item-' + cate.code} data-index={index} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
	        <i className="icon"></i>
	        <a className="big" target="_blank" href={'/c/' + cate.code} title={cate.name}>{cate.name}</a>
	        {list}
	        <i className="arrow"></i>
	    	</li>
    	)
		});

		const panels = category.map((cate, index) => {
			if(index == 15) return null;

			const secondCate = cate.categories.map((item, idx) => {

				const thirdCate = item.categories.map((v, i) => <a key={v.code} target="_blank" href={'/c/' + v.code} title={v.name}>{v.name}</a>);

				return (
	      	<dl key={item.code}>
	          <dt>
	            <a target="_blank" href={'/c/' + item.code} title={item.name}><span>{item.name}</span><i className="arrow"></i></a>
	          </dt>
	          <dd>
	            {thirdCate}
	          </dd>
	        </dl>
	      )
			});

			let isOpen = this.state.show && this.state.show[index] && this.state.show[index].isOpen;

			return (
				<div key={cate.code} className={isOpen ? 'panel open' : 'panel'}>
	      	{secondCate}
	      </div>
      )
    });

		return (
			<div className="mod-cate">
	    	<div className="header">
	        <span><i className="icon"></i>全部分类</span>
	        {/*<a target="_blank" href=""><i class="icon"></i>我的收藏</a>*/}
		    </div>
		    <ul className="lists">{lists}</ul>
		    <div className={this.state.isPanelsShow ? 'panels open' : 'panels'} onMouseEnter={this.handlePanelsEnter} onMouseLeave={this.handlePanelsLeave}>{panels}</div>
			</div>
		)
	}
}

export default Category;