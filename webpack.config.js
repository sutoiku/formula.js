var isProd = process.argv.indexOf('--prod') !== -1;
var webpack = require('webpack');
var filename = isProd ? 'dist/[name].min.js' : 'dist/[name].js';
var externals = {
  // for now we ignore moment and lodash. need to make a choice or document
  // that it is required to have those available
  moment: 'moment',
  lodash: 'lodash'
};
var plugins = [
  new webpack.optimize.DedupePlugin(),

  // this is required to be consumed by require.js
  new webpack.dependencies.LabeledModulesPlugin()
];
if (isProd) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    'formula': './index'
  },
  output: {
    path: __dirname,
    filename: filename,
    library: 'Formula',
    libraryTarget: 'umd'
  },
  externals: externals,
  plugins: plugins
};