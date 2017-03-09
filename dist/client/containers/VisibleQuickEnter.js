'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _QuickEnter = require('../components/QuickEnter');

var _QuickEnter2 = _interopRequireDefault(_QuickEnter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = (state, ownProps) => {
  return {
    customerName: state.customerName
  };
};

const VisbleQuickEnter = (0, _reactRedux.connect)(mapStateToProps /*,
                                                                  mapDispatchToProps*/
)(_QuickEnter2.default);

exports.default = VisbleQuickEnter;