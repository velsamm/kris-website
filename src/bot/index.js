// bot token 1637480905:AAHmp-ABhsQ2c5NOz5TX9y5XfsZBFg6jF_g
const { Telegraf } = require('telegraf')

class Bot {
    constructor() {
        if (this.bot) {
            return this
        }
        this.build()
        this.launch()
        return this
    }

    build() {
        this.bot = new Telegraf(
            '1637480905:AAHmp-ABhsQ2c5NOz5TX9y5XfsZBFg6jF_g'
        )
    }

    launch() {
        this.bot.launch().then(() => {
            this.engine()
        })
    }

    stop(reason) {
        this.bot.stop(reason)
        return this
    }

    engine() {
        this.bot.start((ctx) => {
            ctx.reply('hi')
        })
    }

    sendNotification(telegramId, message) {
        return this.bot.telegram.sendMessage(telegramId, message)
    }
}

module.exports = new Bot()
