require('dotenv').config();
const manager = require('./config/composer');
const bot = require("./core/bot");

bot
    .use(manager)
    .launch()
    .then(() => {
        console.log(`Bot @${bot.botInfo?.username} ishga tushdi!`);
    })
    .catch((err) => {
        throw err;
    })