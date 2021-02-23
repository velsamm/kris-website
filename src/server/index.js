import React from 'react'
import App from '../app/App'

const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ReactDOM = require('react-dom/server')

app.use(express.static(path.resolve('server-build')))

app.get('/', (req, res) => {
    const app = ReactDOM.renderToString(<App />)
    const htmlTemplate = fs.readFileSync(path.resolve('public/index.html')).toString("utf8")

    const html = htmlTemplate.replace('<div id="root"></div>', `<div id="root">${app}</div>`)

    return res.send(html)
})

app.listen(9000)
