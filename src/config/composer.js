const { Composer } = require('telegraf');
const texts = require('../constants/text');
const isGroup = require('../middlewares/isGroup');
const { hasLink, isAllowed } = require('../utils/helper');

const manager = new Composer();

manager.use(isGroup);

let checkLink = async (ctx) => {
    let message = ctx.message || ctx.editedMessage;
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
}

manager.on('message', async (ctx) => {
    await checkLink(ctx);
});

manager.on('edited_message', async (ctx) => {
    await checkLink(ctx);
})

// manager.on('chat_member', (ctx) => {
//     console.log('member');
// });

// manager.on('new_chat_members', (ctx) => {
//     console.log('new');
//     console.log(ctx.chatMember);
// });

// manager.on('my_chat_member', (ctx) => {
//     console.log('my')
// })

// manager.on('left_chat_member', (ctx) => {
//     console.log('left');
// })

module.exports = manager;