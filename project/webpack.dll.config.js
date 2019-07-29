const path = require('path')
const webpack = require('webpack')

const vendor = [
	'vue',
	'vue-router',
	'vuex',
	'axios',
	'qs',
	'babel-polyfill'
]

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