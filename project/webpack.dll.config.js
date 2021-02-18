const path = require('path')
const webpack = require('webpack')
const config = require('./development/config/index.js')
const vendor = config.vendor

module.exports = {
	entry:{
		global:vendor
	},
	output:{
		path:__dirname + '/production/',
		filename:'[name].js',
		library:'[name]'
	},
	plugins:[
		new webpack.DllPlugin({
			path:'manifest.json',
			name:'[name]',
			context:__dirname
		})
	]
}