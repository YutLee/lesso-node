let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let paths = require('./paths.js');

let HtmlWebpackPlugins = paths.getViews('../src/server/temps', '../src/server/views', ['react']);
let entry = Object.assign(
  {
    react: ['react', 'react-dom', 'react-redux', 'redux']
  },
  paths.getEntrys('../src/client/routes')
);

module.exports = {
    entry: entry,
    output: {
      path: path.resolve(__dirname, '../src/server/public'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
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
          use: ExtractTextPlugin.extract([
              {
                loader: 'css-loader'//css-loader can't resolve correctly the path to the generated spritesheet. The possible solution is to skip url resolving.
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('precss'),
                      require('autoprefixer'),
                      require('cssnano')
                    ];
                  }
                }
              }
            ])
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 1024 } //  <= 5kb的图片base64内联
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
        filename: 'js/react.js'
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name : 'common',
      //   filename: 'common-[chunkhash:8].js',
      //   minChunks: 3
      // }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          screw_ie8: true,
          comments: false  // remove all comments
        },
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false
        },
        sourceMap: true,
        mangle: {
          screw_ie8: true
        }
      }),
      new ExtractTextPlugin({
        filename: 'css/[name].css',  //?[hash]-[chunkhash]-[contenthash]-[name]', {
        disable: false,
        allChunks: true
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../src/server/public'),
      publicPath: '/public',
      compress: true,
      port: 9000
    }
};