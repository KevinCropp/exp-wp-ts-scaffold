var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

devConfig.plugins = [
    new UglifyJsPlugin({
        sourceMap: true,
        test: /\.js($|\?)/i
    })
]

var stripLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;