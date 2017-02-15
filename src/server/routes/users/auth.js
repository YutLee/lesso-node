export default function(req, res, next) {
  function referer(url) {
    // res.redirect(url || req.headers.referer || '/');
    res.redirect(url || '/login');
  }

  let isLoginPage = /\/login$/.test(req.originalUrl);

  if(req.session && req.session.uid) {
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

