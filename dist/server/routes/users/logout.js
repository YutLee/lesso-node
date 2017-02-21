'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @api {delete} /logout Logout
 * @apiGroup User
 * @apiName Logout
 * @apiVersion 0.1.0
 *
 * @apiParam {String} access_token 登录成功后的token值
 *
 * @apiSuccess {Number} code 提示代码（200， 4001）。
 * @apiSuccess {String} message 提示信息。
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "code": 200,
 *      "message": "退出成功"
 *  }
 *
 * @apiError {Number} code 提示代码。
 * @apiError {String} message 提示信息。
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 OK
 *  {
 *      "code": 401,
 *      "message": "需要身份认证"
 *  }
 *
 *  HTTP/1.1 404 Not Found
 *  {
 *      "code": 404,
 *      "message": "请求页面不存在"
 *  }
 */

const router = _express2.default.Router();

router.get('/', _auth2.default, function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.status(200).json({ code: 4001, message: '退出失败' });
      return;
    }
    let referer = /*req.headers.referer || */'/login';
    // res.status(200).json({code: 200, location: referer});
    res.redirect(referer);
  });
});

exports.default = router;