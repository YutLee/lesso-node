export default function(req, res, next) {
  function referer(url) {
    // res.redirect(url || req.headers.referer || '/');
    res.redirect(url || '/login');
  }

  let isLoginPage = /\/login$/.test(req.originalUrl);
  let garbage = +new Date(req.session._garbage),
    now = +new Date(),
    originalMaxAge = req.session.cookie && req.session.cookie.originalMaxAge;

  if(req.session && req.session.uid) {
    if(!garbage || now - garbage > originalMaxAge - 10000) {//过期前更新session时间
      req.session._garbage = Date();
      req.session.touch();
    }

    if(isLoginPage) {
      res.redirect('/');
      return;
    }

    req.status = 200;
    next();
  }else {
    if(isLoginPage) {
      next();
      return;
    }
    referer();
  }
};

