let fs = require('fs');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let paths = {
  paths: function(dir) {
    let results = [];
    let rootPath = dir = path.resolve(__dirname, dir);

    (function walkSync(dir) {
      let list = fs.readdirSync(dir);
      // console.log(list)
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        // console.log(file)
        let stat = fs.statSync(file);
        let name;
        if (stat && stat.isDirectory()) {
          walkSync(file);
        } else {
          name = file.replace(rootPath, '').replace(/^\\|\.js$/g, '').replace(/\\/, '-');
          results.push({name: name, value: file});
        }
      });
    })(dir);

    return results;
  },
  getEntrys: function(dir) {
    let res = {};

    this.paths(dir).forEach(function(item) {
      res[item.name] = item.value;
    });

    return res;
  },
  getTemps: function(dir, temps, commonChunks = []) {
    let res =[];
    let options = {
      // chunks: ['index'],
      // excludeChunks: [], //排除块
      // filename: '../../views/index.html',
      template: path.resolve(__dirname, temps),
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

    this.paths(dir).forEach(function(item) {
      let chunks = commonChunks.concat([item.name]),
        filename = item.value.replace(/src\\client\\routes/, 'dist\\server\\views').replace(/\.js$/, '.html');
      res.push(new HtmlWebpackPlugin(Object.assign(options, {chunks, filename})));
    });

    return res;
  }
};

// console.log(paths.getTemps('../src/client/routes', '../src/server/temps/index.html', ['react']));

module.exports = paths;