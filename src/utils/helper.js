const hasLink = (entities) => {
    return entities?.some(e => e.type === "url");
};

const isAllowed = async (ctx) => {
    if (ctx.from.id === 777000) {
        return true;
    }
    let { status } = await ctx.getChatMember(ctx.from.id);
    let allowed = ['creator','administrator'];
    return allowed.includes(status);
}

module.exports = {
    hasLink,
    isAllowed
}