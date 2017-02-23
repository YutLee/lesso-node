import React from 'react'
import VisibleTopMenu from '../../client/containers/VisibleTopMenu';
import VisibleHeader from '../containers/VisibleHeader';
import FooterServer from './FooterServer';
import FooterLinker from './FooterLinker';
import Footer from './Footer';

const IndexPage = () => (
  <div>
    <VisibleTopMenu />
    <VisibleHeader />
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default IndexPage;