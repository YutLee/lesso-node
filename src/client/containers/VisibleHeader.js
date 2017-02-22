import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
  return {
    customerName: state.customerName
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const VisbleHeader = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(Header)

export default VisbleHeader