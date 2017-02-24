import express from 'express';
import reactRender from '../../reactRender';
import Cart from '../../../client/pages/Cart';

const router = express.Router();

router.get('/', function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Cart, preloadedState);
  res.render('cart/index', {title: 'index', html: html, initialState: initialState});
});

export default router;
