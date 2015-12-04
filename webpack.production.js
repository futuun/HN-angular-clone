var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var postcss           = require('postcss-loader');
var autoprefixer      = require('autoprefixer');
var mqpacker          = require('css-mqpacker');

// array of framework/libraries that should go to vendor.build.js
var vendors = [
  'angular',
  'angular-ui-router',
  'angularfire',
  'firebase'
];

var production = {
  addVendor: function (x) {
    // function for adding data into vendor build
    x.forEach(function(element) {
      this.entry.vendors.push(element);
    }, this);
  },

  resolve: {
    root: path.resolve('./src')
  },

  entry: {
    vendors: [],
    app: './src/app.ts'
  },

  output: {
    pathinfo: false,
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    libraryTarget: 'var',
    library: 'Futuun'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: __dirname + '/node_modules',
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'file?name=tmpl/[name].[ext]?[hash:base64]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&-minimize!postcss!sass?sourceMap')
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'url?limit=10000'
      }
    ]
  },

  postcss: [
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker({sort: true}),
  ],

  ts: {
    // speed up compilation, use VS Code to see errors
    transpileOnly: true,
    silent: true
  },

  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: false}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
      filename: '[name].bundle.js',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  debug: true,
  devtool: '#source-map'
};

production.addVendor(vendors);
module.exports = production;