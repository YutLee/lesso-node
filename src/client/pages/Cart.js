import React from 'react'
import VisibleTopMenu from '../containers/VisibleTopMenu';
import Header from '../components/Header';
import CartStep from '../components/CartStep';
import VisibleEmptyCart from '../containers/VisibleEmptyCart';
import RecommendCart from '../components/RecommendCart';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const Cart = () => (
  <div>
    <VisibleTopMenu />
    <Header><CartStep active={1} /></Header>
    <div style={{borderBottom: '3px solid #ff6700'}}></div>
    <VisibleEmptyCart />
    <RecommendCart />
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default Cart;