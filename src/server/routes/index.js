import express from 'express';
import reactRender from '../reactRender';
import category from './category';
import Index from '../../client/pages/Index';

const router = express.Router();

router.get('/', category, function(req, res, next) {
	console.log(req.category)
	const preloadedState = {
		customerName: req.session.customerName || '',
		category: req.category
	};
	const {initialState, html} = reactRender(Index, preloadedState);
  res.render('index/index', {title: 'index', html: html, initialState: initialState});
});

export default router;
