/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: 'ADD_TODO', text }
}

export function getCustomerName(customerName) {
  return { type: 'GET_CUSTOMER_NAME', customerName }
}