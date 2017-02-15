import fetch from 'isomorphic-fetch';

export function proxy(mod) {
	let options = {
		headers: { 'Content-Type': 'application/json'},
		method: mod.method
	};

	if(mod.method == 'POST' && mod.body) {
		options.body = mod.body;
	}

	return fetch(mod.url, options).then(function(res) {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  });
}

export let usersProxy = {
	url: 'http://www.lessoshangcheng.com/lots-web/weixin/users',
	method: 'GET'
}
