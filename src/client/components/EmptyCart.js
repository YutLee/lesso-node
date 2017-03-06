import React from 'react';
import '../styles/empty-cart';

class EmptyCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-empty-cart mod-box">
        <i className="icon"></i>
        <div className="content">
          <h2>购物车还没有商品，去看看心仪的商品吧</h2>
          {
            !this.props.customerName &&
            <a className="button brand" href="/login">登录</a>
          }
          <a href="/">去购物&gt;</a>
        </div>
      </div>
    )
  }
}

export default EmptyCart;