const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //生成html
/**
 * development 开发环境
 * production 生产环境
 * */
module.exports = (env, argv)=> {
  const devMode = argv.mode !== 'production';
  return{
    mode: devMode?'development':'production',
    devtool: devMode?'inline-source-map':false,
    // bundle: ['babel-polyfill','./index.js'],
    entry: [
      'babel-polyfill',
      path.join(__dirname, './src/index.js')
    ], //入口文件index.js,并使用babel转义

    output: {
      filename: '[name].js',
      publicPath: '/',
      path: path.join(__dirname, 'dist'),  //出口文件
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    },
    resolve: {
      // 别名配置
      alias: {
        '@src': path.resolve(__dirname, "./src")
      }
    },
    devServer: {
      contentBase: path.join(__dirname,"public"), //本地静态文件目录
      compress: true,
      publicPath: '/',
      watchContentBase: true,
      historyApiFallback: true,
      open: true, //打开浏览器
      inline:true, // 试试刷新
      hot: true,  //是否开启hot-module-replacement
      port: 8080,  //开启端口
      host: '0.0.0.0'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        },
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' },
        {
          test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024*8,
                name: 'static/images/[name].[hash:7].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(css|less)$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            { loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js'
                }
              }
            },
            {
              loader: 'less-loader',
              options: { sourceMap: true, javascriptEnabled: true }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/style/css/theme/theme1.less',
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({  //css 单独打包
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      //热更新
      new webpack.HotModuleReplacementPlugin(),
      //根据模板生成html 自动引入js css
      new HtmlWebpackPlugin({
        template: './public/index.html',//模版路径
        // favicon: './public/favicon.png',
        minify: { //压缩
          removeAttributeQuotes:true,
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes:true,
          removeStyleLinkTypeAttributes:true
        },
      }),
    ]
  }
};
