require('dotenv').config();
const manager = require('./config/composer');
const keyboards = require('./constants/keyboard');
const texts = require('./constants/text');
const bot = require("./core/bot");

bot
    .start((ctx) => {
        // if (ctx.chat.type !== "private") {
        //     return;
        // }
        let text = texts.welcome({ name: ctx.from.first_name });
        let keyboard = keyboards.invite(ctx.botInfo.username);
        ctx.replyWithHTML(text, keyboard);
    })
    .use(manager)
    .launch()
    .then(() => {
        console.log(`Bot @${bot.botInfo?.username} ishga tushdi!`);
    })
    .catch((err) => {
        throw err;
    })