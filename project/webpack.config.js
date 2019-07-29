const path = require('path')
const webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const uglifyjsPlugin = require('uglifyjs-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
require('babel-polyfill')

module.exports = {
  mode:'development',
  entry:{
    index:['babel-polyfill','./src/pages/index/index.js']
  },
  devtool:'eval-source-map',
  output:{
    path:__dirname + '/production/',
    filename:'[name]/[name].[hash].js'
  },
  module:{
    rules:[
      {
        test:/.(jpg|bmp|eps|gif|mif|miff|png|tif|tiff|svg|wmf|jpe|jpeg|dib|ico|tga|cut|pic)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:2048,
            outputPath:'static/images',
            publicPath:'../static/images',
            name:'[hash].[ext]'
          }
        }]
      },
      {
        test:/\.(avi|asf|wmv|avs|flv|mov|3gp|mp4|mpg|mpeg|dat|ogm|vob|rm|rmvb|ts|tp|ifo|nsv)$/,
        use:[{
          loader:'file-loader',
          options:{
            outputPath:'static/video',
            publicPath:'../static/video',
            name:'[hash].[ext]'
          }
        }]
      },
      {
        test:/\.(mp3|aac|wav|wma|cda|flac|m4a|mid|mka|mp2|mpa|mpc|ape|ofr|ogg|ra|wv|tta|ac3|dts)$/,
        use:[{
          loader:'file-loader',
          options:{
            outputPath:'static/audio',
            publicPath:'../static/audio',
            name:'[hash].[ext]'
          }
        }]
      },
      {
        test:/\.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/,
        use:[{
          loader:'file-loader',
          options:{
            outputPath:'static/font',
            publicPath:'../static/font',
            name:'[hash].[ext]'
          }
        }]
      },
      {
        test:/\.(exe|rar|zip|iso|doc|ppt|xls|xlsx|wps|txt|lrc|docx|pdf)$/,
        use:[{
          loader:'file-loader',
          options:{
            outputPath:'static/doc',
            publicPath:'../static/doc',
            name:'[hash].[ext]'
          }
        }]
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:{
          loaders:{
            css:extractTextPlugin.extract({
              fallback:'vue-style-loader',
              use:'css-loader'
            })
          }
        }
      },
      {
        test:/\.(scss|css)$/,
        loader:extractTextPlugin.extract({
          use:[
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test:/\.js$/,
        loader:'babel-loader'
      }
    ]
  },
  plugins:[
    new htmlPlugin({
      filename:__dirname + '/production/index/index.html',
      template:__dirname + '/src/pages/index/index.html',
      chunks:['index'],
      minify:{
        collapseWhitespace:true,
      }
    }),
    new webpack.DllReferencePlugin({
        context:__dirname,
        manifest:require('./manifest.json')
    }),
    new extractTextPlugin({filename:'[name]/[name].[hash].css',allChunks:true}),
    new vueLoaderPlugin(),
    new uglifyjsPlugin({
      uglifyOptions:{
        compress:{
          // warnings:false,
          // drop_console:true
        }
      }
    }),
    new copyPlugin([
      {from:'src/mock',to:'mock'}
    ]),
    new cleanPlugin(
      ['production'],
      {
        exclude:['global.js','json'],
        root:__dirname,
        verbose:true,
        dry:false
      }
    )
  ],
  optimization:{
      minimizer:[new optimizeCssAssetsPlugin({})],
  },
  devServer:{
    contentBase:'./production/',
    openPage:'index',
    historyApiFallback:true,
    inline:true,
    progress:true,
    hot:true,
    // proxy:{
    //   '/api':{
    //     target:'',
    //     changeOrigin:true,
    //     pathRewrite:{
    //       "^/api":""
    //     }
    //   },
    // }
  }
}