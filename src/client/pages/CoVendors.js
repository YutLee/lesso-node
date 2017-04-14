import React from 'react';
import VisibleTopMenu from '../containers/VisibleTopMenu';
import AccountHeader from '../components/AccountHeader';
import AccountBody from '../components/AccountBody';
// import VisibleAccountIndex from '../containers/VisibleAccountIndex';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const CoVendors = () => (
  <div>
    <VisibleTopMenu />
	  <AccountHeader router="co-vendors" />
	  <AccountBody router="co-vendors"></AccountBody>
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default CoVendors;