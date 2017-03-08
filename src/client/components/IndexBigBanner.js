import React from 'react';
import '../styles/index-big-banner';

class IndexBigBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-banner-box">
        {this.props.children}
      </div>
    )
  }
}

export default IndexBigBanner;