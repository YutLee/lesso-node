import fetch from 'isomorphic-fetch';


function status(res) {
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(new Error(res.statusText))
  }
}

function json(res) {
  return res.json()
}

export function proxy(input, init) {
	let options = Object.assign({}, {
		headers: { 'Content-Type': 'application/json'},
		method: 'GET'
	}, init);

	let params = '';
	if(options.params) {
		params = '?';
		Object.keys(options.params).forEach((param, idx) => {
			params += `${idx == 0 ? '' : '&'}${param}=${options.params[param]}`;
		});
	}

	return fetch(input + params, options)
	  .then(status)
	  .then(json)
	  .then(function(data) {
	    // console.log('Request succeeded with JSON response', data);
	  	return Promise.resolve(data);
	  }).catch(function(error) {
	    // console.log('Request failed', error);
	    return Promise.reject(new Error(error))
	  });
}


let host = 'http://www.lessoshangcheng.com';

//用户信息
export let usersProxy = {
	url: host + '/lots-web/weixin/users'
}

//分类
export let categoryProxy = {
	url: host + '/lots-web/weixin/categories'
}

/**
 * [ordersCountProxy 订单数量]
 * @customerCode {String|Number} 编号 //802336
 */
export let ordersCountProxy = {
	url: host + '/lots-web/weixin/orders/count',
	params: [
		'customerCode'
	]
}

/**
 * [customerPointsProxy 积分]
 * @customerCode {String|Number} 编号 //802336
 */
export let customerPointsProxy = {
	url: host + '/lots-web/hybris/points/customerPoints',
	params: [
		'customerCode'
	]
}

/**
 * [cartProxy 购物车]
 * @customerCode {String|Number} 编号 //802336
 */
export let cartProxy = {
	url: host + '/lots-web/weixin/cart',
	params: [
		'customerCode'
	]
}

/**
 * [distributorsProxy 合作商家]
 * @customerCode {String|Number} 编号 //802336
 * @vip_flag {String|Number} 是否合作商家，20为已合作商家，10为申请合作商家
 * @orderby {String|Number}
 * @sort {String|Number}
 * @start {String|Number}
 * @limit {String|Number}
 * @isPage {String|Number}
 */
export let distributorsProxy = {
	url: host + '/lots-web/weixin/distributors',
	params: [
		'customerCode',
		'vip_flag',
		'orderby',
 		'sort',
 		'start',
 		'limit',
 		'isPage'
	]
}
