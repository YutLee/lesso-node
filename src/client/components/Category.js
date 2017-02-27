import React from 'react';

class Category extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
		const { category } = this.props;
		const lists = category.map((cate, index) => {
			if(index == 15) return null;

			const list = cate.subCategory.map((item, idx) => <a key={idx} target="_blank" href={'/c/' + item.code} title={item.name}>{item.name}</a>);

			return (
				<li key={index} className={'item-' + cate.code}>
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

				const thirdCate = item.categories.map((v, i) => <a target="_blank" href={'/c/' + v.code} title={v.name}>{v.name}</a>);

				return (
	      	<dl key={idx}>
	          <dt>
	            <a target="_blank" href={'/c/' + item.code} title={item.name}>{item.name}<i className="arrow"></i></a>
	          </dt>
	          <dd>
	            {thirdCate}
	          </dd>
	        </dl>
	      )
			});

			return (
				<div key={index} className="panel">
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
		    <div className="panels">{panels}</div>
			</div>
		)
	}
}

export default Category;