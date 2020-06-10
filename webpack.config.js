const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, './client/public'),
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
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
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
        })
    ]
}