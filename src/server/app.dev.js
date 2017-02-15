import express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import res from '../../node_modules/express/lib/response';
import application from './application';

res.render = function render(view, options, callback) {
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
        <link href="/public/css/${view.replace(/\//g, '-') + '.css'}" rel="stylesheet">
      </head>
      <body>
        <div id="root" class="menu">${opts.html}</div>
        <script>
          window.__INITIAL_STATE__ = ${opts.initialState};
        </script>
        <script src="/public/js/react.js"></script>
        <script src="/public/js/${view.replace(/\//g, '-') + '.js'}"></script>
      </body>
    </html>`;

  self.send(content);
};


let app = express();
// proxy middleware options
let options = {
  target: 'http://localhost:9000', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  ws: true,                         // proxy websockets
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
app.use('/public', proxy(options));

application(app);

export default app;
