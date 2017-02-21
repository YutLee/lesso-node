'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _reactRender = require('../../reactRender');

var _reactRender2 = _interopRequireDefault(_reactRender);

var _reducers = require('../../../client/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _LoginFrom = require('../../../client/containers/LoginFrom');

var _LoginFrom2 = _interopRequireDefault(_LoginFrom);

var _config = require('../../proxy/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();
// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';
/**
 * @api {post} /login Login
 * @apiGroup User
 * @apiName Login
 * @apiVersion 0.1.0
 *
 * @apiParam {String} mobile 登录名（手机号）
 * @apiParam {String} password 密码
 *
 * @apiSuccess {Number} code 提示代码（200， 4001， 4002， 4003）。
 * @apiSuccess {String} message 提示信息。
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "code": 200,	//登录成功
 *      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDAwMDAsInVzZXJfaWQiOjEwMDAwMDAwLCJpYXQiOjE0NzczNjc4ODAsImV4cCI6MTQ3NzM2OTY4MH0.tXoaawIr3Ln5rYFviAso0K9R9DPN_qe8AF2R-y1dwpU"
 *  }
 *
 *  HTTP/1.1 200 OK
 *  {
 *      "code": 4001,
 *      "message": "用户名不能为空"
 *  }
 *
 *  HTTP/1.1 200 OK
 *  {
 *      "code": 4002,
 *      "message": "密码不能为空"
 *  }
 *
 *  HTTP/1.1 200 OK
 *  {
 *      "code": 4003,
 *      "message": "用户名或密码错误"
 *  }
 *
 * @apiError {Number} code 提示代码。
 * @apiError {String} message 提示信息。
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *      "code": 404,
 *      "message": "请求页面不存在"
 *  }
 */

router.get('/', _auth2.default, function (req, res, next) {
  const { initialState, html } = (0, _reactRender2.default)(_LoginFrom2.default, null, _reducers2.default);
  res.render('users/login', { title: 'index', html: html, initialState: JSON.stringify(initialState) });
});

router.post('/', function (req, res, next) {
  let body = req.body,
      mobile = (body && body.mobile).trim(),
      password = body && body.password;
  const TIMEOUT = 1800;

  if (mobile == '') {
    res.status(200).json({ code: 4001, message: '用户名不能为空' });
    return;
  }
  if (password == '') {
    res.status(200).json({ code: 4002, message: '密码不能为空' });
    return;
  }
  password = (0, _md2.default)(req.body.password);

  (0, _config.proxy)(_config.usersProxy, `?mobile=${mobile}`).then(function (data) {
    // console.log(data);
    let result = data.result && data.result[0],
        uid = result && result.uid;

    if (!uid || result.mobile != mobile || result.password != password) {
      res.status(200).json({ code: 4003, message: '用户名或密码错误' }); //better 401?
      return;
    }

    req.session.uid = uid;
    req.session.username = result.username;
    req.session.storeName = result.storeName;
    req.session.customerName = result.customerName;
    req.session.customerCode = result.customerCode;
    req.session.auditStatus = result.auditStatus;
    req.session.mobile = result.mobile;
    req.session.realPhone = result.realPhone;

    let referer = req.headers.referer;
    if (!referer || /\/log(in|out)$/.test(referer)) {
      referer = '/';
    }
    res.status(200).json({ code: 200, location: referer });
  });
});

exports.default = router;