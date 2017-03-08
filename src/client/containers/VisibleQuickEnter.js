import { connect } from 'react-redux';
import QuickEnter from '../components/QuickEnter';

const mapStateToProps = (state, ownProps) => {
  return {
    customerName: state.customerName
  }
}

const VisbleQuickEnter = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(QuickEnter);

export default VisbleQuickEnter;