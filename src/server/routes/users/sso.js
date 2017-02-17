import express from 'express';
import CAS from './cas';

const router = express.Router();

router.get('/', CAS().auth, function(req, res, next) {
  if(req.session.ticket) {
    // let expires = new Date();
    // expires.setDate(expires.getDate() + 90);
    // res.cookie('user', req.user, {expires: expires});
    let referer = req.headers.referer;
    if(!referer || /\/cas\/login/.test(referer)) {
      referer = '/';
    }
    res.redirect(referer);
  }else {
    res.status(401).send('An error occur when login');
  }
});

router.post('/', function(req, res, next) {
  // console.log(req.body.logoutRequest);
  // logoutRequest: '<samlp:LogoutRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" ID="LR-301-whSUfYWvCDTe13IDA1dSBM2kIIzmo40yvwd" Version="2.0" IssueInstant="2017-02-17T10:55:41Z"><saml:NameID xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">@NOT_USED@</saml:NameID><samlp:SessionIndex>ST-301-fKdTdKnu192jY324M2By-cas01.example.org</samlp:SessionIndex></samlp:LogoutRequest>'
  let logoutRequest = req.body.logoutRequest,
    logout = false,
    ticket;

  if(logoutRequest) {
    ticket = logoutRequest.match(/<samlp:SessionIndex>(.+?)<\/samlp:SessionIndex>/i)[1];
    if(global.ticket == ticket) {
      logout = true;
      global.ticket = null;
    }
  }

  // if(logout) {
  //   let referer = req.headers.referer;
  //   if(!referer || /\/cas\/login/.test(referer)) {
  //     referer = '/';
  //   }
  //   res.redirect(referer);
  // }else {
  //   res.status(401).send('退出失败');
  // }
});

export default router;