'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.getCustomerName = getCustomerName;
/*
 * action 创建函数
 */

function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

function getCustomerName(customerName) {
  return { type: 'GET_CUSTOMER_NAME', customerName };
}