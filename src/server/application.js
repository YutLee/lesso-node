import path from 'path';
import fs from 'fs';
import favicon from 'serve-favicon';
import logger from 'morgan';
// import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';

import index from './routes/index';
import login from './routes/users/login';
import logout from './routes/users/logout';
import cart from './routes/cart';

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
  // app.use(cookieParser());
  app.use(session({
    secret: 'is-not-lesso', //加密sessionID cookie的密钥。
    resave: false,// 是否每次都重新保存会话，强制把session写入存储，即使session在整个请求过程中都没有被修改, 建议false
    saveUninitialized: true,// 是否自动保存未初始化的会话，建议false
    name: 'lessouid',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {
      // secure: true, //https下需要设置
      maxAge: 30 * 60 * 1000 //session和相应的cookie失效过期
    }
  }));

  app.use('/', index);
  app.use('/login', login);
  app.use('/logout', logout);
  app.use('/cart', cart);

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