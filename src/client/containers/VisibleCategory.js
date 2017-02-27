import { connect } from 'react-redux';
import Category from '../components/Category';

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.category
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const VisbleCategory = connect(
  mapStateToProps/*,
  mapDispatchToProps*/
)(Category);

export default VisbleCategory;