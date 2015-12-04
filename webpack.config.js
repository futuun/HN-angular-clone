var webpack = require('webpack');
var path = require('path');

// array of framework/libraries that should go to vendor.build.js
var vendors = [
  'angular',
  'angular-ui-router',
  'angularfire',
  'firebase'
];

var config = {
  addVendor: function (x) {
  // function for adding data into vendor build
    x.forEach(function(element) {
      this.module.noParse.push(new RegExp(element + '\\.js$'));
      // don't parse vendor's (faster build)
      this.entry.vendors.push(element);
    }, this);
    if(x.length) this.module.noParse.push(/vendors\.bundle\.js$/);
  },

  resolve: {
    root: path.resolve('./src')
  },

  debug: true,
  devtool: 'eval',

  entry: {
    vendors: [],
    app: ['webpack/hot/dev-server', __dirname + '/src/app.ts']
  },

  output: {
    pathinfo: true,
    path: '/',
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    libraryTarget: 'var',
    library: 'Futuun'
  },

  module: {
    noParse: [],
    loaders: [
      {
        test: /\.ts$/,
        exclude: __dirname + '/node_modules',
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  ts: {
    // speed up compilation, use VS Code to see errors
    transpileOnly: true,
    silent: true
  },

  devServer: {
    // serve files from /src to localhost:1337
    contentBase: "./src",
    noInfo: false,
    hot: true,
    port: 1337,
    stats: {
      colors: true
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
      filename: '[name].bundle.js',
    })
  ]
};

config.addVendor(vendors);
module.exports = config;