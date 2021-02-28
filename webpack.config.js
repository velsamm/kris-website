const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/app/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '',
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: 'index.[contenthash].css' }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src/app')],
                loader: 'babel-loader',
            },
            {
                test: /.css$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /.(jpg|svg)$/,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
        host: '0.0.0.0'
        // writeToDisk: true,
    },
}
