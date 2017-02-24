import React from 'react'
import VisibleTopMenu from '../../client/containers/VisibleTopMenu';
import Header from '../components/Header';
import CartStep from '../components/CartStep';
import VisibleEmptyCart from '../containers/VisibleEmptyCart';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const Cart = () => (
  <div>
    <VisibleTopMenu />
    <Header><CartStep active={1} /></Header>
    <div style={{borderBottom: '3px solid #ff6700'}}></div>
    <VisibleEmptyCart />
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default Cart;