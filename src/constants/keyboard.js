const { Markup } = require("telegraf");

const invite = (username) => Markup.inlineKeyboard([
    Markup.button.url("➕ Botni guruhga qo'shish", `https://t.me/${username}?startgroup=true`)
]);

const keyboards = {
    invite
};

module.exports = keyboards;