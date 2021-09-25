require('dotenv').config();
const manager = require('./config/composer');
const texts = require('./constants/text');
const bot = require("./core/bot");

bot
    .use(manager)
    .start((ctx) => {
        let text = texts.welcome({ name: ctx.from.first_name });
        ctx.reply(text);
    })
    .launch()
    .then(() => {
        console.log(`Bot @${bot.botInfo?.username} ishga tushdi!`);
    })
    .catch((err) => {
        throw err;
    })