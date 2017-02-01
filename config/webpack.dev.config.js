let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    entry: {
      react: ['react'],
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
          // exclude: /node_modules/,
          include: [
            path.resolve(__dirname, '../src/client')
          ],
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
          test: /\.(png|jpe?g|gif)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 5120 } //  <= 5kb的图片base64内联
          },
        }/*,
        {
          test: /\.jpg$/,
          use: [ 'file-loader' ]
        }*/
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'react',
        filename: 'react.js'
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name : 'common',
      //   filename: 'common-[chunkhash:8].js',
      //   minChunks: 3
      // }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false  // remove all comments
        },
        compress: {
          warnings: false
        },
        sourceMap: false,
        mangle: false
      }),
      new HtmlWebpackPlugin({
        chunks: ['index'],
        // excludeChunks: [], //排除块
        filename: '../views/index.html',
        template: path.resolve(__dirname, '../src/server/temps/index.html')
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