import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import TopMenu from '../components/TopMenu'

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

const VisbleTopMenu = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(TopMenu)

export default VisbleTopMenu