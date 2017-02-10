import path from 'path';
import fs from 'fs';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import index from './routes/index';
import users from './routes/users';
import login from './routes/users/login';

function application(app) {
  // view engine setup
  app.engine('html', function (filePath, options, callback) { // 定义模板引擎
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(new Error(err));

      // 这是一个功能极其简单的模板引擎
      let rendered = content.toString().replace(/{{=([^}}]+)?}}/g, function(s0, s1){
          return options[s1];
      });

      return callback(null, rendered);
    })
  });
  app.set('views', path.join(__dirname, 'views')); // 指定视图所在的位置
  app.set('view engine', 'html'); // 注册模板引擎

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use('/', index);
  app.use('/users', users);
  app.use('/login', login);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}

export default application;