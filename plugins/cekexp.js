let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].exp} Xp Left`)
}
handler.help = ['cekxp @user']
handler.tags = ['xp']
handler.command = /^(cekxp|xp)$/i

module.exports = handler
