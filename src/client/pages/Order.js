import React from 'react';
import VisibleTopMenu from '../containers/VisibleTopMenu';
import AccountHeader from '../components/AccountHeader';
import AccountBody from '../components/AccountBody';
// import VisibleAccountIndex from '../containers/VisibleAccountIndex';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const Order = () => (
  <div>
    <VisibleTopMenu />
	  <AccountHeader router="orders" />
	  <AccountBody router="orders"></AccountBody>
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default Order;