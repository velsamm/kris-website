import React from 'react'
import App from '../app/App'

const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ReactDOMServer = require('react-dom/server')
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
    const app = ReactDOMServer.renderToStaticMarkup(
        <App sendNotification={bot.sendNotification} />
    )
    const htmlTemplate = fs
        .readFileSync(path.resolve('build/client/index.html'))
        .toString('utf8')

    const html = htmlTemplate.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div>`
    )

    return res.send(html)
})

app.listen(9000)
