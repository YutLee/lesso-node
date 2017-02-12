import jwt from 'jsonwebtoken';
import cache from 'memory-cache';

export default function(req, res, next) {
  // res.set('Content-Type', 'application/json;charset=utf-8');
  let token = (req.cookies && req.cookies.access_token) || req.headers['x-access-token'] || (req.body && req.body.access_token) || (req.query && req.query.access_token);
  let decoded, now, accessToken;
  // var token = req.session.access_token || null;
  
  function referer(url) {
    // res.redirect(url || req.headers.referer || '/');
    res.redirect(url || '/login');
  }

  if(token) {
  	now = Math.floor(Date.now() / 1000);
    try{
    	decoded = jwt.verify(token, 'access_token');
    }catch(err) {
      referer();
    }

    if(!decoded || (decoded.iat > now || decoded.exp < now)) {
      referer();
  	  return;
    }

    accessToken = cache.get('access_token_' + decoded.id);
    // console.log(accessToken);
    if(!accessToken) {
      referer();
    }else {
  	  req.tokenDecoded = decoded;
  	  req.token = token;
  	  req.status = 200;
      next();
    }
  } else {
    referer();
  }
};

