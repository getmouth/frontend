const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: ['whatwg-fetch', './client/src/index.js'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: { importLoaders: 1 }},
                    { loader: 'sass-loader' }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            minimize: true,
            debug: false
        }),
        new MiniCssExtractPlugin({
         filename: './public/styles.css'
       }),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}