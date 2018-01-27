var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	context: __dirname,
	entry: {
		'./client/public/js/bundle': "./client/development/js/index.jsx",
		 './client/public/css/style': "./client/development/sass/style.sass"
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
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new UglifyJsPlugin(),
		new webpack.DefinePlugin({
    		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
};
