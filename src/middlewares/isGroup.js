module.exports = (ctx,next) => {
    if (["group", "supergroup"].includes(ctx.chat.type)) {
        return next();
    }
    return;
}