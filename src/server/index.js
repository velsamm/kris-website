const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const debug = require('debug')('app:debug')
require('dotenv').config()

const bot = require('../bot/index')
app.use(express.static(path.resolve('build/client')))

process.once('SIGINT', () => {
    try {
        bot.stop('SIGINT')
    } catch (e) {
        debug(e)
    }
})
process.once('SIGTERM', () => {
    try {
        bot.stop('SIGTERM')
    } catch (e) {
        debug(e)
    }
})

app.use(express.json())

app.get('/', (req, res) => {
    const html = fs
        .readFileSync(path.resolve('build/client/index.html'))
        .toString('utf8')

    return res.send(html)
})

app.post('/send', (req, res) => {
    debug(req.body)

    const payload = req.body
    const name = `Имя: ${payload.name || ''}`
    const phone = `Телефон: ${payload.phone || ''}`
    const email = `Email: ${payload.email || ''}`
    const issue = `Сообщение: ${payload.issue || ''}`

    const tgMessage = `
Новая заявка!
    
${name}
${phone}
${email}
${issue}`

    const receivers = process.env.RECEIVERS
    bot.sendNotification(receivers.split(','), tgMessage)
        .then(() => {
            res.send()
        })
        .catch((e) => {
            debug(e)
            res.status(500).send()
        })

    return
})

app.listen(9000)
