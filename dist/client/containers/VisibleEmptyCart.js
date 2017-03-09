'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _EmptyCart = require('../components/EmptyCart');

var _EmptyCart2 = _interopRequireDefault(_EmptyCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = (state, ownProps) => {
  return {
    customerName: state.customerName
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

// import { setVisibilityFilter } from '../actions'
const VisbleEmptyCart = (0, _reactRedux.connect)(mapStateToProps /*,
                                                                 mapDispatchToProps*/
)(_EmptyCart2.default);

exports.default = VisbleEmptyCart;