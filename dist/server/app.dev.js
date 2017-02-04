'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _httpProxyMiddleware = require('http-proxy-middleware');

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _memoryFs = require('memory-fs');

var _memoryFs2 = _interopRequireDefault(_memoryFs);

var _webpackDev = require('../../config/webpack.dev.config');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _response = require('../../node_modules/express/lib/response');

var _response2 = _interopRequireDefault(_response);

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mfs = new _memoryFs2.default();
const compiler = (0, _webpack2.default)(_webpackDev2.default);
compiler.outputFileSystem = mfs;

_response2.default.render = function render(view, options, callback) {
  var done = callback;
  var opts = options || {};
  // var req = this.req;
  var self = this;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge res.locals
  // opts._locals = self.locals;

  // // default callback to respond
  // done = done || function (err, str) {
  //   if (err) return req.next(err);
  //   self.send(str);
  // };

  // render
  compiler.run((err, stats) => {
    if (err) {
      return self.send(err);
    }
    // Read the output later:
    // console.log('------', name);
    const content = mfs.readFileSync(compiler.outputPath + '/../views/' + view + '.html');
    // 这是一个功能极其简单的模板引擎
    let rendered = content.toString().replace(/{{=([^%>]+)?}}/g, function (s0, s1) {
      return options[s1];
    });

    self.send(rendered);
  });
};

let app = (0, _express2.default)();
// proxy middleware options
let options = {
  target: 'http://localhost:9000', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    // '^/api/old-path' : '/api/new-path',     // rewrite path
    // '^/api/remove/path' : '/path'           // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    '//localhost:3000/public/': '//localhost:9000/public/'
    // 'http://localhost:3000' : 'http://yutlee.com'
  }
};
app.use('/public', (0, _httpProxyMiddleware2.default)(options));

(0, _application2.default)(app);

exports.default = app;