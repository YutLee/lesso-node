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
    entry: entry,
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
                loader: 'css-loader?-url'//css-loader can't resolve correctly the path to the generated spritesheet. The possible solution is to skip url resolving.
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('precss'),
                      require('autoprefixer'),
                      require('cssnano'),
                      require('postcss-sprites')({
                        stylesheetPath: path.resolve(__dirname, '../src/server/public/css'),
                        spritePath: path.resolve(__dirname, '../src/server/public/img')  
                      })
                    ];
                  }
                }
              } 
            ])
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: { loader: 'url-loader', options: { limit: 1024 } },
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
      // Makes some environment variables available to the JS code, for example:
      // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
      // It is absolutely essential that NODE_ENV was set to production here.
      // Otherwise React will be compiled in the very slow development mode.
      // new webpack.DefinePlugin(env),
      // This helps ensure the builds are consistent if source hasn't changed:
      new webpack.optimize.OccurrenceOrderPlugin(),
      // Minify the code.
      new webpack.optimize.UglifyJsPlugin({
        output: {
          screw_ie8: true,
          comments: false  // remove all comments
        },
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false
        },
        sourceMap: false,
        mangle: {
          screw_ie8: true
        }
      }),
      new ExtractTextPlugin({
        filename: '../css/[name]-[chunkhash:8].css',  //?[hash]-[chunkhash]-[contenthash]-[name]', {
        disable: false,
        allChunks: true
      }),
      new BeforeHtmlProcessing()
    ].concat(HtmlWebpackPlugins),
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'source-map'
};

function spritesOnUpdateRule(isDev, rule, comment, image){
  console.log(image);
  // var spriteUrl = image.spriteUrl;
  // image.spriteUrl = '/public/' + spriteUrl;
  // postcssSprites.updateRule(rule, comment, image);
}

function spritesOnSaveSpritesheet(isDev, opts, groups) {
  // let file = postcssSprites.makeSpritesheetPath(opts, groups);
  // return file;
}