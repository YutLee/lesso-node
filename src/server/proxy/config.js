import fetch from 'isomorphic-fetch';

export function proxy(mod, params) {
	let options = {
		headers: { 'Content-Type': 'application/json'},
		method: mod.method || 'GET'
	};

	if(mod.method == 'POST' && mod.body) {
		options.body = mod.body;
	}

	return fetch(mod.url + (params || ''), options).then(function(res) {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  });
}

let host = 'http://www.lessoshangcheng.com';

export let usersProxy = {
	url: host + '/lots-web/weixin/users'
}

export let categoryProxy = {
	url: host + '/lots-web/weixin/categories'
}
