const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
require('dotenv').config()

app.use(express.static(path.resolve('build/client')))

app.use(express.json())

app.get('/', (req, res) => {
    const html = fs
        .readFileSync(path.resolve('build/client/index.html'))
        .toString('utf8')

    return res.send(html)
})

app.listen(9000)
