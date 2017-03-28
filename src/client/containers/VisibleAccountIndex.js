import { connect } from 'react-redux';
import AccountIndex from '../components/AccountIndex';

const mapStateToProps = (state, ownProps) => {
  return {
    customerName: state.customerName,
    storeName: state.storeName,
    realPhone: state.realPhone,
    lastLoginTime: state.lastLoginTime,
    orderCount: state.orderCount,
    availablePoints: state.availablePoints
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const VisbleAccountIndex = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(AccountIndex);

export default VisbleAccountIndex;