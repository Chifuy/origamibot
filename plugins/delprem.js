let fs = require('fs')
let handler = async (m, { conn, text, isOwner }) => {
    if (!isOwner) throw false
    const dbprem = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = text ? text : m.chat
    if (dbprem.includes(who)) throw 'Belum Premium!'
    let index = dbprem.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    dbprem.splice(index, 1)
    fs.writeFileSync('./src/premium.json', JSON.stringify(dbprem))
    conn.reply(m.chat, `Hay, @${who.split`@`[0]} Masa Premium Kamu Telah Berakhir!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
    delete require.cache[require.resolve('../config')]
    require('../config')
}
handler.help = ['delprem *@user*']
handler.tags = ['owner']
handler.rowner = true
handler.command = /^(remove|hapus|-|del)prem$/i
module.exports = handler

