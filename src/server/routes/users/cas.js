import fetch from 'isomorphic-fetch';

let cas_host;
let service;

let CAS = (options) => {
  cas_host = (options && options.cas_host) || 'http://lytest.lessoald.cn/cas';
  service = (options && options.service) || 'http://192.168.112.15:3000/sso';
  return CAS;
};

CAS.auth = function(req, res, next)  {
  function updateSession() {
    let garbage = +new Date(req.session._garbage),
        now = +new Date(),
        originalMaxAge = req.session.cookie && req.session.cookie.originalMaxAge;

    if(!garbage || now - garbage > originalMaxAge - 10000) {//过期前更新session时间
      req.session._garbage = Date();
      req.session.touch();
    }
  }

  if (global.ticket && req.session.ticket) {
    updateSession();
    next();
  }else {
    let ticket = req.query.ticket;
    if (ticket) {
      fetch(cas_host + '/proxyValidate?service=' + service + '&ticket=' + ticket)
        .then(function(res) {
          return res.text();
        })
        .then(function(data) {
          // let list_user = data.match(/(<cas:user>)(.+?)(<\/cas:user>)/i);
          // let user = list_user && list_user[0] || '';
          // user = user.replace('<cas:user>', '').replace('<\/cas:user>', '');
          // req.user = user;
          updateSession();
          req.session.ticket = ticket;
          global.ticket = ticket;
          next();
        })
        .catch(function(err) {
          next();
        });
    }else {
      res.redirect(cas_host + '/login?service=' + service);
    }
  }
};

CAS.logout = function(req, res, next) {
  let url = cas_host + '/logout';
  fetch(url).then((res) => {
    req.session.ticket = null;
    global.ticket = null;
    next();
  }).catch(function(err) {
    res.status(200).send('退出失败');
  });
};

export default CAS;