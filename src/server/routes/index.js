import express from 'express';
import reactRender from '../reactRender';
import index from '../../client/reducers';
import TopMenu from '../../client/components/TopMenu';
import auth from './users/auth';

const router = express.Router();

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  const {initialState, html} = reactRender(index, TopMenu, 'sdfdsf');
  res.render('index/index', {title: 'index', html: html, initialState: JSON.stringify(initialState)});
});

export default router;
