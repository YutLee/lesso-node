import React from 'react'
import VisibleTopMenu from '../containers/VisibleTopMenu';
import VisibleCategory from '../containers/VisibleCategory';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MiniCart from '../components/MiniCart';
import Nav from '../components/Nav';
import FooterServer from '../components/FooterServer';
import FooterLinker from '../components/FooterLinker';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <VisibleTopMenu />
    <Header><MiniCart /><SearchBar /></Header>
    <Nav><VisibleCategory /></Nav>
    <FooterServer />
    <FooterLinker />
    <Footer />
  </div>
)

export default Index;