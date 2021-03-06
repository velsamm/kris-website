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
        this.bot = new Telegraf(process.env.BOT_TOKEN)
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

    async sendNotification(telegramId, message) {
        return await Promise.all([
            this.bot.telegram.sendMessage(telegramId[0], message),
            this.bot.telegram.sendMessage(telegramId[1], message),
        ])
    }
}

module.exports = new Bot()
