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

var _response = require('../../node_modules/express/lib/response');

var _response2 = _interopRequireDefault(_response);

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_response2.default.render = function render(view, options, callback) {
  let done = callback;
  let opts = options || {};
  // let req = this.req;
  let self = this;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  let content = `<!doctype html>
    <html>
      <head>
        <title>${opts.title}</title>
        <link href="/public/css/react.css" rel="stylesheet">
        <link href="/public/css/${view.replace(/\//g, '-') + '.css'}" rel="stylesheet">
      </head>
      <body>
        <div id="root">${opts.html}</div>
        <script>
          window.__INITIAL_STATE__ = ${opts.initialState};
        </script>
        <script src="/public/js/react.js"></script>
        <script src="/public/js/${view.replace(/\//g, '-') + '.js'}"></script>
      </body>
    </html>`;

  self.send(content);
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