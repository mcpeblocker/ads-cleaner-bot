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
        let prevMessage = ctx.session.last_message_id;
        if (prevMessage) {
            await ctx.deleteMessage(ctx.session.last_message_id);
        }
        let text = texts.warning({ name: ctx.from.first_name, id: ctx.from.id });
        let { message_id } = await ctx.replyWithHTML(text);
        ctx.session.last_message_id = message_id;
    }
});

module.exports = manager;