import React from 'react';
import AccountNav from './AccountNav';

class AccountBody extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon(router) {
  	return this.props.router == router && <i className="icon"></i>
  }

  render() {
    return (
      <div className="mod-account-box">
      	<div className="mod-box fix">
      		<AccountNav />
      		{this.props.children}
      	</div>
			</div>
    )
  }
}

export default AccountBody;
