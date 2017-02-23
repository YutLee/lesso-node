import express from 'express';
import reactRender from '../../reactRender';
import IndexPage from '../../../client/components/IndexPage';

const router = express.Router();

router.get('/', function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(IndexPage, preloadedState);
  res.render('cart/index', {title: 'index', html: html, initialState: initialState});
});

export default router;
