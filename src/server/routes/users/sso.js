import express from 'express';
import CAS from './cas';

const router = express.Router();

/* GET home page. */
router.get('/', CAS().auth, function(req, res, next) {
  if(req.session.user) {
    // let expires = new Date();
    // expires.setDate(expires.getDate() + 90);
    // res.cookie('user', req.user, {expires: expires});
    let referer = req.headers.referer || '/';
    res.redirect(referer);
  }else {
    res.status(401).send('An error occur when login');
  }
});

export default router;