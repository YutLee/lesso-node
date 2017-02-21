'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _TopMenu = require('../components/TopMenu');

var _TopMenu2 = _interopRequireDefault(_TopMenu);

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
const VisbleTopMenu = (0, _reactRedux.connect)(mapStateToProps /*,
                                                               mapDispatchToProps*/
)(_TopMenu2.default);

exports.default = VisbleTopMenu;