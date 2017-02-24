import express from 'express';
import reactRender from '../reactRender';
import Index from '../../client/pages/Index';

const router = express.Router();

router.get('/', function(req, res, next) {
	const preloadedState = {customerName: req.session.customerName || ''}
	const {initialState, html} = reactRender(Index, preloadedState);
  res.render('index/index', {title: 'index', html: html, initialState: initialState});
});

export default router;
