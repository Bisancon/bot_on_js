import express from 'express'
import { PORT, TOKEN } from './config.js'
import Telegraf from 'telegraf'
import { getMainMenu } from './keyboards.js'

const app = express()
const bot = new Telegraf(TOKEN)

bot.start(ctx => {
    ctx.reply('Welcome, bro', getMainMenu())
})

bot.hears('Мои задачи', ctx => {
    ctx.reply('Тут будут ваши задачи')
})

bot.hears('Добавить задачу', ctx => {
    ctx.reply('Тут вы сможете добавить свои задачи')
})

bot.hears('Смотивируй меня', ctx => {
    ctx.replyWithPhoto(
        'https://img2.goodfon.ru/wallpaper/nbig/7/ec/justdoit-dzhastduit-motivaciya.jpg',
        {
            caption: 'Не вздумай сдаваться!'
        }
    )
})

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))