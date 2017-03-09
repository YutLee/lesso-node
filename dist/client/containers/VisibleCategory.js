'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Category = require('../components/Category');

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.category
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const VisbleCategory = (0, _reactRedux.connect)(mapStateToProps /*,
                                                                mapDispatchToProps*/
)(_Category2.default);

exports.default = VisbleCategory;