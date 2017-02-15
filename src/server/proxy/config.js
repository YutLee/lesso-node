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

export let usersProxy = {
	url: 'http://www.lessoshangcheng.com/lots-web/weixin/users'
}
