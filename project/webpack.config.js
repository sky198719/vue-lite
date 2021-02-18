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
const config = require('./development/config/index.js')
const html = config.html
const buildHtml = config.buildHtml
const api = config.api
let entryPoint = ''
let htmlPoint = []
let apiPoint = ''
let sourcemap = process.env.CURRENT_ENT == 'production' ? '' : 'eval-source-map'
let currentBuild = process.env.CURRENT_BUILD == 'build' ? html : buildHtml
htmlPoint.push(new webpack.HotModuleReplacementPlugin())
for(let i = 0 ; i < currentBuild.length ; i ++){
	if(i == currentBuild.length - 1){
		entryPoint += currentBuild[i] + ":['babel-polyfill','./development/pages/" + currentBuild[i] + "/index.js']"
	}else{
		entryPoint += currentBuild[i] + ":['babel-polyfill','./development/pages/" + currentBuild[i] + "/index.js'],"
	}
	htmlPoint.push(new htmlPlugin({filename:__dirname + '/production/' + currentBuild[i] + '/index.html',template:__dirname + '/development/pages/' + currentBuild[i] + '/index.html',chunks:[currentBuild[i]],minify:{collapseWhitespace:true}}))
}
htmlPoint.push(new webpack.DllReferencePlugin({context:__dirname,manifest:require('./manifest.json')}))
htmlPoint.push(new miniCssExtractPlugin({filename:'[name]/[name].[hash].css'}))
htmlPoint.push(new vueLoaderPlugin())
if(process.env.CURRENT_ENT == 'production'){
	htmlPoint.push(new uglifyjsPlugin())
	htmlPoint.push(new optimizeCssAssetsPlugin())
}
htmlPoint.push(new copyPlugin([{from:'development/static/mock',to:'static/mock'},{from:'development/static/lib',to:'static/lib'}]))
if(process.env.CURRENT_ENT == 'production'){
	let removeBuild = []
	for(let i = 0 ; i < currentBuild.length ; i ++){
		removeBuild.push('production/' + currentBuild[i])
	}
	removeBuild.push('production/static')
	if(process.env.CURRENT_BUILD == 'build'){
		removeBuild = ['production']
	}
	htmlPoint.push(new cleanPlugin(removeBuild,{exclude:['global.js'],root:__dirname,verbose:true,dry:false}))
}
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

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	devtool:sourcemap,
	stats:{
		children:false
	},
	entry:entryPoint,
	output:{
		path:__dirname + '/production/',
		filename:'[name]/[name].[hash].js'
	},
	resolve:{
		alias:{
      		'@':resolve('development')
		}
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
				exclude:/(node_modules|bower_components)/,
			      use:{
			        loader:'babel-loader',
			        options:{
			          presets:['@babel/preset-env']
			        }
			    }
			}
		]
	},
	plugins:htmlPoint,
	devServer:{
		contentBase:'./production/',
		open:true,
		openPage:'index',
		historyApiFallback:true,
		inline:true,
		progress:true,
		hot:true,
		overlay:true,
		proxy:apiPoint
	}
}
