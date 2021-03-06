const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const debug = require('debug')('app:debug')

const bot = require('../bot/index')
app.use(express.static(path.resolve('build/client')))

process.once('SIGINT', () => {
    try {
        bot.stop('SIGINT')
        app.close(() => {})
    } catch (e) {
        debug(e)
    }
})
process.once('SIGTERM', () => {
    try {
        bot.stop('SIGTERM')
        app.close(() => {})
    } catch (e) {
        debug(e)
    }
})

app.get('/', (req, res) => {
    const html = fs
        .readFileSync(path.resolve('build/client/index.html'))
        .toString('utf8')

    return res.send(html)
})

app.listen(9000)
