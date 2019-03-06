const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const uglifyjs = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:'development',
  entry:{
    index:'./src/pages/index/index.js'
  },
  output:{
    path:__dirname + "/dist/",
    filename:'[name]/[name].[hash].js'
  },
  module:{
    rules:[
      {
        test:/.(jpg|bmp|eps|gif|mif|miff|png|tif|tiff|svg|wmf|jpe|jpeg|dib|ico|tga|cut|pic)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:1024,
            outputPath:'static/img',
            publicPath:'../static/img',
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
    new htmlWebpackPlugin({
      filename:__dirname + '/dist/index/index.html',
      template:__dirname + '/src/pages/index/index.html',
      chunks:['index'],
      minify:{
        collapseWhitespace:true,
      }
    }),
    new copyWebpackPlugin([
      {
        from:__dirname + '/src/lib/js',
        to:'./lib/js'
      },
      {
        from:__dirname + '/src/lib/css',
        to:'./lib/css'
      },
      {
        from:__dirname + '/src/lib/images',
        to:'./lib/images'
      }
    ]),
    new extractTextPlugin({filename:'[name]/[name].[hash].css',allChunks:true}),
    new vueLoaderPlugin(),
    new uglifyjs(),
    new cleanWebpackPlugin(
      ['dist'],
      {
        root:__dirname,
        exclude:['json'],
        verbose:true,
        dry:false
      }
    )
  ],
  optimization:{
      minimizer:[new optimizeCss({})],
  },
  devServer:{  
    contentBase:"./dist/",
    openPage:'index',
    historyApiFallback:true,
    inline:true,
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