import React from 'react';

class EmptyCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-recommend-cart mod-box">
        <h4 className="header">最近浏览</h4>
        <ul className="list fix">
          <li className="item">
            <a className="pic" href="" title="" target="_blank">
              <img src="" alt="" />
            </a>
            <a className="title" href="" title="" target="_blank">飞旋牌 三角带A1350mm</a>
            <div className="other fix">
              <p className="price">¥<span>6</span></p>
              <p className="quantity">≥1条</p>
            </div>
            <a className="add-to-cart" href="/login">添加到购物车</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default EmptyCart;