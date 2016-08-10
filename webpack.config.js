var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'rattata'
  },
  module: {
    loaders: [
      {
        loader: 'babel', 
        test: /\.js$/
      }
    ]
  },
  externals: nodeModules
};