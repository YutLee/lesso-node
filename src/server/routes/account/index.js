import express from 'express';
import async from 'async';
import reactRender from '../../reactRender';
import Account from '../../../client/pages/Account';
import PasswordChange from '../../../client/pages/PasswordChange';
import CoVendors from '../../../client/pages/CoVendors';
import Orders from '../../../client/pages/Orders';
import Info from '../../../client/pages/Info';
import Tutorial from '../../../client/pages/Tutorial';
import Address from '../../../client/pages/Address';
import QuickPay from '../../../client/pages/QuickPay';
import Order from '../../../client/pages/Order';
import Points from '../../../client/pages/Points';
import auth from '../users/auth';
import {
	proxy,
	ordersCountProxy,
	customerPointsProxy,
	cartProxy,
	distributorsProxy
} from '../../proxy/config';

const router = express.Router();

router.get('/', auth, function(req, res, next) {

	function renderHtml(data) {
		const preloadedState = {
			customerName: req.session.customerName || '',
			storeName: req.session.storeName || '',
			realPhone: req.session.realPhone || '',
			lastLoginTime: req.session.lastLoginTime || '',
			orderCount: data && data.orderCount || {},
			availablePoints: data && data.availablePoints || 0,
			cartCount: data && data.cartCount || 0,
			vendors: data && data.vendors || 0
		}

		const {initialState, html} = reactRender(Account, preloadedState);

	  res.render('account/index', {title: '首页-用户中心', html: html, initialState: initialState});
	}

	let fnArr = [];
	[ordersCountProxy, customerPointsProxy, cartProxy, distributorsProxy].forEach((item) => {
		fnArr.push(function(callback) {
			let params = {};
			params[item.params[0]] = req.session.customerCode;
			if(/distributors$/.test(item.url)) {
				params[item.params[1]] = 20;
			}
			proxy(item.url, {
				params: params
			}).then(function(res) {
				let data;
				if(/cart$/.test(item.url)) {
					data = (res.carts || []).reduce(function(a, b) {
						return a + parseInt(b.totalItems);
					}, 0);
				}else if(/distributors$/.test(item.url)) {
					data = res.total;
				}else {
					data = res;
				}
				callback(null, data);
			}).catch(function(err) {
				callback(err);
			})
		});
	})

	async.parallel(fnArr, function(err, results) {
   	if(err) {
   		renderHtml();
   	}else {
   		let data = {
   			orderCount: results[0] && results[0].orderCount,
   			availablePoints: results[1] && results[1].availablePoints,
   			cartCount: results[2],
   			vendors: results[3]
   		};

   		renderHtml(data);
   	}
	});

});

router.get('/password-change', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(PasswordChange, preloadedState);

  res.render('account/password-change', {title: '修改密码-用户中心', html: html, initialState: initialState});
});

router.get('/quick-pay', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(QuickPay, preloadedState);

  res.render('account/quick-pay', {title: '快捷支付-用户中心', html: html, initialState: initialState});
});

router.get('/info', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Info, preloadedState);

  res.render('account/info', {title: '账户信息-用户中心', html: html, initialState: initialState});
});

router.get('/tutorial', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Tutorial, preloadedState);

  res.render('account/tutorial', {title: '使用教程-用户中心', html: html, initialState: initialState});
});

router.get('/co-vendors', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(CoVendors, preloadedState);

  res.render('account/co-vendors', {title: '合作商家-用户中心', html: html, initialState: initialState});
});

router.get('/address', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Address, preloadedState);

  res.render('account/address', {title: '收货地址-用户中心', html: html, initialState: initialState});
});

router.get('/points', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Points, preloadedState);

  res.render('account/points', {title: '帐户积分-用户中心', html: html, initialState: initialState});
});

router.get('/orders', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Orders, preloadedState);

  res.render('account/orders', {title: '我的订单-用户中心', html: html, initialState: initialState});
});

router.get('/order', auth, function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Order, preloadedState);

  res.render('account/order', {title: '订单详情-用户中心', html: html, initialState: initialState});
});

export default router;
