var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	context: __dirname,
	entry: {
		'public/js/bundle': "./client/development/js/index.jsx",
	  'public/css/style': "./client/development/sass/style.sass"
	},
	output: {
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [['es2015', { loose: true }], 'react', 'stage-0'],
				},
			},
			{
				test: /(\.scss|\.sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	devtool: '#cheap-module-source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3001,
			files: ['./client/', './views/'],
			proxy: 'localhost:3000',
			injectChanges: false,
		})
	]
}
