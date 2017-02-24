import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import EmptyCart from '../components/EmptyCart'

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

const VisbleEmptyCart = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(EmptyCart)

export default VisbleEmptyCart