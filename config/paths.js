let fs = require('fs');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let paths = {
  paths: function(dir) {
    let results = [];
    (function walkSync(dir) {
      let list = fs.readdirSync(dir);
      // console.log(list)
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        // console.log(file)
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
          walkSync(file);
        } else {
          results.push(file);
        }
      });
    })(dir);
    return results;
  },
  getEntrys: function(dir) {
    let res = {};
    dir = path.resolve(__dirname, dir);

    this.paths(dir).forEach(function(item, idx) {
      let value, name;
      item = item.replace(/\\/g, '/').split(dir.replace(/^\.+?\//, ''));
      if(item && item[0]) {
        value = item[0].replace(/\.js$/, '');
        name = value.replace(dir.replace(/\\/g, '/'), '').replace(/^\//, '').replace(/\//g, '-');
        res[name] = path.resolve(__dirname, value);
      }
    });

    return res;
  },
  getViews: function(temps, views, commonChunks) {
    let res = [];
    let dir = path.resolve(__dirname, temps);

    let options = {
      // chunks: ['index'],
      // excludeChunks: [], //排除块
      // filename: '../../views/index.html',
      // template: path.resolve(__dirname, '../src/server/temps/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    };

    this.paths(dir).forEach(function(item, idx) {
      let value, filename, template, chunks;
      item = item.replace(/\\/g, '/').split(dir.replace(/^\.+?\//, ''));
      if(item && item[0]) {
        value = item[0].replace(/\\/g, '/');
        chunks = /error\.html$/.test(item) ? [] : (commonChunks || []).concat[value.replace(dir.replace(/\\/g, '/'), '').replace(/^\/|\.html$/g, '').replace(/\//g, '-')];
        filename = path.resolve(__dirname, value.replace(new RegExp(temps.replace(/^\.+?\//, '')), views.replace(/^\.+?\//, '')));
        template = path.resolve(__dirname, value);
        res.push(new HtmlWebpackPlugin(Object.assign(options, {chunks, filename, template})));
      }
    });

    return res;
  }
};

module.exports = paths;