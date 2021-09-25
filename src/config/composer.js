const { Composer } = require('telegraf');
const texts = require('../constants/text');
const isGroup = require('../middlewares/isGroup');
const { hasLink, isAllowed } = require('../utils/helper');

const manager = new Composer();

manager.use(isGroup);

manager.on('message', async (ctx) => {
    let message = ctx.message;
    let isUrl = hasLink(message.entities || message.caption_entities);
    if (isUrl) {
        let allowed = await isAllowed(ctx);
        if (allowed) {
            return;
        }
        await ctx.deleteMessage();
        let text = texts.warning({ name: ctx.from.first_name, id: ctx.from.id });
        ctx.replyWithHTML(text);
    }
});

module.exports = manager;