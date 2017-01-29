var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function BeforeHtmlProcessing(options) {
  // body...
}

BeforeHtmlProcessing.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(data, callback) {
      data.html = data.html.replace(/<\s?script.*src.*>\s?<\s?\/script\s?>/g, '');
      callback(null, data);
    });
  });
};

module.exports = {
    entry: {
      index: path.resolve(__dirname, '../src/client/routes/index/index')
    },
    output: {
        path: path.resolve(__dirname, '../src/server/public/js'),
        publicPath: '/public/js',
        filename: '[name]-[chunkhash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js'
    },
    module: {
      rules: [
        // rules for modules (configure loaders, parser options, etc.)
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                minimize: true || {/* CSSNano Options */}
              }
            }
          ]
        },
        {
          test: /\.png$/,
          use: { loader: 'url-loader', options: { limit: 100000 } },
        },
        {
          test: /\.jpg$/,
          use: [ 'file-loader' ]
        }
      ]
    },
    plugins: [
      new BeforeHtmlProcessing(),
      new HtmlWebpackPlugin({
        chunks: ['index'],
        // excludeChunks: [], //排除块
        filename: '../../views/index.html',
        template: path.resolve(__dirname, '../src/server/temps/index.html')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'source-map'
};