'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _redux = require('redux');

function index(state = { customerName: '' }, action) {
  let newState = Object.assign({}, state, {
    customerName: action.customerName
  });
  switch (action.type) {
    case 'GET_CUSTOMER_NAME':
      {
        return newState;
      }
    default:
      return state;
  }
}