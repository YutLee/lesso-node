'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res, next) {

    // res.set('Content-Type', 'application/json;charset=utf-8');
    let token = req.cookies && req.cookies.access_token || req.headers['x-access-token'] || req.body && req.body.access_token || req.query && req.query.access_token;
    let decoded, now, accessToken;
    // var token = req.session.access_token || null;
    if (token) {
        now = Math.floor(Date.now() / 1000);
        try {
            decoded = _jsonwebtoken2.default.verify(token, 'access_token');
        } catch (err) {
            req.status = 401;
            next();
        }

        if (!decoded || decoded.iat > now || decoded.exp < now) {
            req.status = 401;
            next();
            return;
        }

        accessToken = _memoryCache2.default.get('access_token_' + decoded.id);
        // console.log(accessToken);
        if (!accessToken) {
            req.status = 401;
        } else {
            req.tokenDecoded = decoded;
            req.token = token;
            req.status = 200;
        }
        next();
    } else {
        req.status = 401;
        next();
    }
};

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _memoryCache = require('memory-cache');

var _memoryCache2 = _interopRequireDefault(_memoryCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;