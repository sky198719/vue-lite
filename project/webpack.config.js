const path = require('path')
const webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const uglifyjsPlugin = require('uglifyjs-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
require('babel-polyfill')
const config = require('./src/config/index.js')
const html = config.html
const api = config.api
let entryPoint = ''
let htmlPoint = []
let apiPoint = ''
htmlPoint.push(new webpack.HotModuleReplacementPlugin())
for(let i = 0 ; i < html.length ; i ++){
	if(i == html.length - 1){
		entryPoint += html[i] + ":['babel-polyfill','./src/pages/" + html[i] + "/index.js']"
	}else{
		entryPoint += html[i] + ":['babel-polyfill','./src/pages/" + html[i] + "/index.js'],"
	}
	htmlPoint.push(new htmlPlugin({filename:__dirname + '/production/' + html[i] + '/index.html',template:__dirname + '/src/pages/' + html[i] + '/index.html',chunks:[html[i]],minify:{collapseWhitespace:true}}))
}
htmlPoint.push(new webpack.DllReferencePlugin({context:__dirname,manifest:require('./manifest.json')}))
htmlPoint.push(new miniCssExtractPlugin({filename:'[name]/[name].[hash].css'}))
htmlPoint.push(new vueLoaderPlugin())
htmlPoint.push(new uglifyjsPlugin())
htmlPoint.push(new optimizeCssAssetsPlugin())
htmlPoint.push(new copyPlugin([{from:'src/mock',to:'mock'}]))
htmlPoint.push(new cleanPlugin(['production'],{exclude:['global.js','json'],root:__dirname,verbose:true,dry:false}))
entryPoint = '{' + entryPoint + '}'
entryPoint = eval('(' + entryPoint + ')')
for(let i = 0 ; i < api.length ; i ++){
	if(i == api.length - 1){
		apiPoint += "'/" + api[i].name + "':{target:'" + api[i].url + "',changeOrigin:true,secure: false,pathRewrite:{'^/" + api[i].name + "':'/'}}"
	}else{
		apiPoint += "'/" + api[i].name + "':{target:'" + api[i].url + "',changeOrigin:true,secure: false,pathRewrite:{'^/" + api[i].name + "':'/'}},"
	}
}
apiPoint = '{' + apiPoint + '}'
apiPoint = eval('(' + apiPoint + ')')

module.exports = {
	stats:{
		children:false
	},
	entry:entryPoint,
	output:{
		path:__dirname + '/production/',
		filename:'[name]/[name].[hash].js'
	},
	module:{
		rules:[
			{
				test:/.(jpg|bmp|eps|gif|mif|miff|png|tif|tiff|svg|wmf|jpe|jpeg|dib|ico|tga|cut|pic)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:2048,
							outputPath:'static/images',
							publicPath:'../static/images',
							name:'[hash].[ext]'
						}
					}
				]
			},
			{
				test:/\.(avi|asf|wmv|avs|flv|mov|3gp|mp4|mpg|mpeg|dat|ogm|vob|rm|rmvb|ts|tp|ifo|nsv)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'static/video',
							publicPath:'../static/video',
							name:'[hash].[ext]'
						}
					}
				]
			},
			{
				test:/\.(mp3|aac|wav|wma|cda|flac|m4a|mid|mka|mp2|mpa|mpc|ape|ofr|ogg|ra|wv|tta|ac3|dts)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'static/audio',
							publicPath:'../static/audio',
							name:'[hash].[ext]'
						}
					}
				]
			},
			{
				test:/\.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'static/font',
							publicPath:'../static/font',
							name:'[hash].[ext]'
						}
					}
				]
			},
			{
				test:/\.(exe|rar|zip|iso|doc|ppt|xls|xlsx|wps|txt|lrc|docx|pdf)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'static/doc',
							publicPath:'../static/doc',
							name:'[hash].[ext]'
						}
					}
				]
			},
			{
				test:/\.vue$/,
				use:[
					'vue-loader'
				]
			},
			{
				test:/\.(scss|css)$/,
				use:[
					miniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test:/\.js$/,
				use:[
					'babel-loader'
				]
			}
		]
	},
	plugins:htmlPoint,
	devServer:{
		contentBase:'./production/',
		openPage:'index',
		historyApiFallback:true,
		inline:true,
		progress:true,
		hot:true,
		proxy:apiPoint
	}
}