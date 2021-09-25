const warning = (options) => {
    return `<b>⚠️ Hurmatli, <a href="tg://user?id=${options.id}">${options.name}</a>, guruhda reklama tarqatish mumkin emas!</b>`
}

const texts = {
    warning
}

module.exports = texts;