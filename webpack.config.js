const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/app/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build/client'),
        publicPath: '',
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: 'index.css' }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
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
                test: /.(jpg|svg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]',
                },
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'build/client'),
        compress: true,
        port: 3000,
        host: '0.0.0.0',
	disableHostCheck: true
        // writeToDisk: true,
    },
}
