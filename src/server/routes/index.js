import express from 'express';
import auth from './users/auth';
import reactRender from '../reactRender';
import index from '../../client/reducers';
import TopMenu from '../../client/components/TopMenu';

const router = express.Router();

router.get('/', auth, function(req, res, next) {
	console.log(req.session.customerName);
	// state = req.session;
	// function user(state = {}, action = {}) {
	//   return Objcet.assgin({}, state);
	// }
  const {initialState, html} = reactRender(index, TopMenu);
  res.render('index/index', {title: 'index', html: html, initialState: JSON.stringify(initialState)});
});


export default router;

