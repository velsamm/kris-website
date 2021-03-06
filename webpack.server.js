const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('build/ssr'),
        filename: 'index.js',
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'index.css' })],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
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
}
