let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].diamond} 💎Diamond :/`)
}
handler.help = ['diamond [@user]']
handler.tags = ['dd']
handler.command = /^(diamond)$/i
module.exports = handler