import React from 'react'
import VisibleTopMenu from '../../client/containers/VisibleTopMenu';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MiniCart from '../components/MiniCart';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <VisibleTopMenu />
    <Header><MiniCart /><SearchBar /></Header>
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default Index;