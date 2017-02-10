import express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import webpack from 'webpack';
import MemoryFS from 'memory-fs';

import webpackConfig from '../../config/webpack.dev.config';
import res from '../../node_modules/express/lib/response';
import application from './application';

const mfs = new MemoryFS();
const compiler = webpack(webpackConfig);
compiler.outputFileSystem = mfs;

res.render = function render(view, options, callback) {
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
  self.send('ok');
  // render
  // compiler.run((err, stats) => {
  //   if(err) {
  //     return self.send(err);
  //   }
  //   // Read the output later:
  //   // console.log('------', name);
  //   const content = mfs.readFileSync(compiler.outputPath + '\\..\\views\\' + (view.replace(/\//g, '\\')) + '.html');
  //   // 这是一个功能极其简单的模板引擎
  //   let rendered = content.toString().replace(/{{=([^}}]+)?}}/g, function(s0, s1){
  //       return options[s1];
  //   });

  //   self.send(rendered);
  // });
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
