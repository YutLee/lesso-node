'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _login = require('./routes/users/login');

var _login2 = _interopRequireDefault(_login);

var _logout = require('./routes/users/logout');

var _logout2 = _interopRequireDefault(_logout);

var _cart = require('./routes/cart');

var _cart2 = _interopRequireDefault(_cart);

var _account = require('./routes/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function application(app) {
  // view engine setup
  app.engine('html', function (filePath, options, callback) {
    // 定义模板引擎
    _fs2.default.readFile(filePath, function (err, content) {
      if (err) return callback(new Error(err));

      // 这是一个功能极其简单的模板引擎
      let rendered = content.toString().replace(/{{=([^}}]+)?}}/g, function (s0, s1) {
        return options[s1];
      });

      return callback(null, rendered);
    });
  });
  app.set('views', _path2.default.join(__dirname, 'views')); // 指定视图所在的位置
  app.set('view engine', 'html'); // 注册模板引擎

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(logger('dev'));
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  // app.use(cookieParser());
  app.use((0, _expressSession2.default)({
    secret: 'is-not-lesso', //加密sessionID cookie的密钥。
    resave: false, // 是否每次都重新保存会话，强制把session写入存储，即使session在整个请求过程中都没有被修改, 建议false
    saveUninitialized: true, // 是否自动保存未初始化的会话，建议false
    name: 'lessouid', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {
      // secure: true, //https下需要设置
      maxAge: 30 * 60 * 1000 //session和相应的cookie失效过期
    }
  }));

  app.use('/', _index2.default);
  app.use('/login', _login2.default);
  app.use('/logout', _logout2.default);
  app.use('/cart', _cart2.default);
  app.use('/account', _account2.default);

  function getErrorHtml(err) {
    return `<!doctype html>
      <html>
        <head>
          <title>${err.message}</title>
        </head>
        <body>
          <h1>${err.status}</h1>
          <h2>${err.message}</h2>
        </body>
      </html>`; //<pre>${err.stack}</pre>
  }

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;

    res.send(getErrorHtml(err));
    // next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;

    // render the error page
    res.status(err.status || 500);
    res.send(getErrorHtml(err));
  });
}
// import cookieParser from 'cookie-parser';
exports.default = application;