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

import express from 'express';
import md5 from 'md5';
// require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import auth from './auth';
import reactRender from '../../reactRender';
import todoApp from '../../../client/reducers';
import LoginFrom from '../../../client/containers/LoginFrom';

const router = express.Router();

router.get('/', function(req, res, next) {
	console.log(req.session.uid);
  const {initialState, html} = reactRender(todoApp, LoginFrom);
  res.render('users/login', {title: 'index', html: html, initialState: JSON.stringify(initialState)});
});

router.post('/', function(req, res, next) {
	let body = req.body,
		mobile = (body && body.mobile).trim(),
		password = body && body.password;
	const TIMEOUT = 1800;
	
	if(mobile == '') {
		res.status(200).json({code: 4001, message: '用户名不能为空'});
		return;
	}
	if(password == '') {
		res.status(200).json({code: 4002, message: '密码不能为空'});
		return;
	}
	password = md5(req.body.password);

	fetch(`http://www.lessoshangcheng.com/lots-web/weixin/users?mobile=${mobile}`)
    .then(function(res) {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(function(data) {
    	let result = data.result && data.result[0],
    		uid = result && result.uid;

    	if(!uid || result.mobile != mobile || result.password != password) {
    		res.status(200).json({code: 4003, message: '用户名或密码错误'});//better 401?
    		return;
    	}

    	req.session.uid = result.uid;

			let referer = req.headers.referer;
			if(!referer || (/\/log(in|out)$/).test(referer)) {
				referer = '/';
			}
			res.status(200).json({code: 200, location: referer});
    });
});

export default router;

