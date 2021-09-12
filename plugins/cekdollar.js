let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].dollar} 💸Dollar :/`)
}
handler.help = ['cekdollar [@user]']
handler.tags = ['dd']
handler.command = /^(cekdollar)$/i
module.exports = handler