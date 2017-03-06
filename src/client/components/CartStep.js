import React from 'react';
import '../styles/cart-step';

class CartStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="mod-cart-step fix fl-r">
        <li className={this.props.active == 1 ? 'item active' : 'item'}>
          <i className="line"></i>
          <span className="step">1</span>
          <p className="title">1.我的购物车</p>
        </li>
        <li className={this.props.active == 2 ? 'item active' : 'item'}>
          <i className="line"></i>
          <span className="step">2</span>
          <p className="title">2.填写核对订单信息</p>
        </li>
        <li className={this.props.active == 3 ? 'item active' : 'item'}>
          <i className="line"></i>
          <span className="step">3</span>
          <p className="title">3.成功提交订单</p>
        </li>
      </ul>
    )
  }
}

export default CartStep;