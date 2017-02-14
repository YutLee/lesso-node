'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res, next) {
  function referer(url) {
    // res.redirect(url || req.headers.referer || '/');
    res.redirect(url || '/login');
  }

  if (req.session && req.session.uid) {
    req.status = 200;
    next();
  } else {
    referer();
  }
};

;