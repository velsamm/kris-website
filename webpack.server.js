const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('build/ssr'),
        filename: 'index.js',
    },
}
