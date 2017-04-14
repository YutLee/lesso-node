import React from 'react';
import AccountNav from './AccountNav';
import '../styles/account-body';

class AccountBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-account-box">
      	<div className="mod-box fix">
      		<AccountNav router={this.props.router} />
      		{this.props.children}
      	</div>
			</div>
    )
  }
}

export default AccountBody;
