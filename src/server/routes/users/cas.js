import fetch from 'isomorphic-fetch';

let cas_host;
let service;

let CAS = (options) => {
  cas_host = (options && options.cas_host) || 'http://lytest.lessoald.cn/cas';
  service = (options && options.service) || 'http://localhost:3000/sso';
  return CAS;
};

CAS.auth = function(req, res, next)  {
  if (req.session.user) {
    next();
  }else {
    let ticket = req.query.ticket;
    if (ticket) {
      fetch(cas_host + '/serviceValidate?service=' + service + '&ticket=' + ticket)
        .then(function(res) {
          return res.text();
        })
        .then(function(data) {
          let list_user = data.match(/(<cas:user>)(.+?)(<\/cas:user>)/i);
          let user = list_user[0];
          user = user.replace('<cas:user>', '');
          user = user.replace('<\/cas:user>', '');
          // req.user = user;

          let garbage = +new Date(req.session._garbage),
            now = +new Date(),
            originalMaxAge = req.session.cookie && req.session.cookie.originalMaxAge;

          if(req.session && req.session.user) {
            if(!garbage || now - garbage > originalMaxAge - 10000) {//过期前更新session时间
              req.session._garbage = Date();
              req.session.touch();
            }
          }else {
            req.session.user = user;
          }

          next();
        });
    }else {
      res.redirect(cas_host + '/login?service=' + service);
    }
  }
};

CAS.logout = function(req, res, next) {
  let url = cas_host + '/logout';
  fetch(url);
  req.user = null;
  next();
};

export default CAS;