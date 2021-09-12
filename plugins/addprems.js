let fs = require('fs')
let handler = async (m, { conn, text, isOwner }) => {
    if (!isOwner) throw false
    const dbprem = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = text ? text : m.chat
    if (dbprem.includes(who)) throw 'Sudah Premium!'
    dbprem.push(`${who.split('@')[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(dbprem))
    conn.reply(m.chat, `Hay, @${who.split('@')[0]} Kamu Sudah *PREMIUM!*`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
    delete require.cache[require.resolve('../config')]
    require('../config')
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.rowner = true
handler.command = /^(add|tambah|\+)prem$/i
module.exports = handler
