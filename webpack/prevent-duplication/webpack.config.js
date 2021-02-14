const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        contact: path.resolve(__dirname,'src/js/contact.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
     hot:true, 
     open:true,
     port:9000,  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //enforce: 'pre',
                //use: ['babel-loader','source-map-loader'],
                use: 'babel-loader',
                exclude: /node_modules/,
                
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:1
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.(jpg|png|git|woff|eot|ttf|svg|mp4|webm)$/i,
                use:  {
                    loader:'url-loader',
                    options: {
                       limit: 90000, 
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname, 'index.html')
        }),
        //new webpack.SourceMapDevToolPlugin({
        //    filename: "[file].map"
        //  }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: 'commons'
        }
    }
}