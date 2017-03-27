import express from 'express';
import reactRender from '../../reactRender';
import Account from '../../../client/pages/Account';
import auth from '../users/auth';
import { proxy, usersProxy } from '../../proxy/config';

const router = express.Router();

router.get('/', /*auth, */function(req, res, next) {

	proxy(usersProxy.url + '/' + req.session.customerCode).then(function(data) {
		console.log(data)
	}).catch(function(err) {

	});

	const preloadedState = {
		customerName: req.session.customerName || '',
		storeName: req.session.storeName || '',
		realPhone: req.session.realPhone || '',
		lastLoginTime: req.session.lastLoginTime || ''
	}

	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/index', {title: '首页-用户中心', html: html, initialState: initialState});
});

router.get('/password-change', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/password-change', {title: '修改密码-用户中心', html: html, initialState: initialState});
});

router.get('/quick-pay-register', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/quick-pay-register', {title: '快捷支付-用户中心', html: html, initialState: initialState});
});

router.get('/detail', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/detail', {title: '账户信息-用户中心', html: html, initialState: initialState});
});

router.get('/tutorial', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/tutorial', {title: '使用教程-用户中心', html: html, initialState: initialState});
});

router.get('/co-vendors', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/co-vendors', {title: '合作商家-用户中心', html: html, initialState: initialState});
});

router.get('/addresses', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/addresses', {title: '收货地址-用户中心', html: html, initialState: initialState});
});

router.get('/points', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/points', {title: '帐户积分-用户中心', html: html, initialState: initialState});
});

router.get('/points', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/points', {title: '帐户积分-用户中心', html: html, initialState: initialState});
});

router.get('/orders', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/orders', {title: '我的订单-用户中心', html: html, initialState: initialState});
});

router.get('/order', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/order', {title: '订单详情-用户中心', html: html, initialState: initialState});
});

export default router;
