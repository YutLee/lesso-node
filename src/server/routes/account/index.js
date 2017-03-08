import express from 'express';
import reactRender from '../../reactRender';
import Account from '../../../client/pages/Account';

const router = express.Router();

router.get('/', function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Account, preloadedState);

  res.render('account/index', {title: 'index', html: html, initialState: initialState});
});

export default router;
