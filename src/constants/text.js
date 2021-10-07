const warning = (options) => {
    return `<b>⚠️ Hurmatli, <a href="tg://user?id=${options.id}">${options.name}</a>, guruhda reklama tarqatish mumkin emas!</b>`
};

const welcome = (options) => {
    return `👋 Assalomu alaykum, <b>${options.name}.</b> Reklama tozalovchi botga xush kelibsiz. Botdan foydalanish uchun shunchaki uni guruhda admin qiling!`;
}

const texts = {
    warning,
    // welcome
}

module.exports = texts;