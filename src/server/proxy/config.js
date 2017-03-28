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

	return fetch(input, options)
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

export let usersProxy = {
	url: host + '/lots-web/weixin/users'
}

export let categoryProxy = {
	url: host + '/lots-web/weixin/categories'
}

export let ordersCountProxy = {
	url: host + '/lots-web/weixin/orders/count'
}

export let customerPointsProxy = {
	url: host + '/lots-web/hybris/points/customerPoints'
}
