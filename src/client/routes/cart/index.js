// import 'babel-polyfill'
import React from 'react'
import reactRender from '../reactRender';
import VisibleTopMenu from '../../containers/VisibleTopMenu';
import VisibleHeader from '../../containers/VisibleHeader';
import FooterServer from '../../components/FooterServer';
import FooterLinker from '../../components/FooterLinker';
import Footer from '../../components/Footer';

import '../../styles/common';
import '../../styles/top-menu';
import '../../styles/search-box';
import '../../styles/mini-cart';
import '../../styles/footer-server';
import '../../styles/footer-linker';
import '../../styles/footer';

import '../../images/img/wjqrcode';
import '../../images/img/wxqrcode';


const IndexPage = () => (
  <div>
    <VisibleTopMenu />
    <VisibleHeader />
    <div style={{borderBottom: '3px solid #ff6700'}}></div>
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

reactRender(IndexPage);