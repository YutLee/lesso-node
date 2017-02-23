import React from 'react'
import VisibleTopMenu from '../../client/containers/VisibleTopMenu';
import VisibleHeader from '../containers/VisibleHeader';
import Footer from './Footer';

const IndexPage = () => (
  <div>
    <VisibleTopMenu />
    <VisibleHeader />
    <Footer />
  </div>
)

export default IndexPage;