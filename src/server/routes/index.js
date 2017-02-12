import express from 'express';
import reactRender from '../reactRender';
import todoApp from '../../client/reducers';
import App from '../../client/components/App';
import auth from './users/auth';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const {initialState, html} = reactRender(todoApp, App);
  res.render('index/index', {title: 'index', html: html, initialState: JSON.stringify(initialState)});
});

export default router;
