var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: path.resolve(__dirname, '../src/client/routes/index/index')
    },
    output: {
        path: path.resolve(__dirname, '../src/server/public/js'),
        filename: '[name].js',
        chunkFilename: '[name].js'
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
      new HtmlWebpackPlugin({
        chunks: ['index'],
        // excludeChunks: [], //排除块
        filename: '../views/index.html',
        template: path.resolve(__dirname, '../src/server/views/index.html')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../src/server/public'),
      publicPath: '/public/js',
      compress: true,
      port: 9000
    }
};