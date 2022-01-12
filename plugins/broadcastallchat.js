let fetch = require('node-fetch')
let fotos = `https://telegra.ph/file/89b101c196a6eb66a68f5.jpg`
let handler = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim broadcast all chat ke-${chats.length} chat_`, m)
  for (let id of chats) conn.send2Button(id, await (await fetch(imgthumb).buffer(), '「 BROADCAST ALL CHAT 」', teks + '\n\n' + wm, '⋮☰ MENU', '!menu', '🏷️ DONASI', '!donasi', null).catch(_=>_)
  conn.reply(m.chat, '_Selesai broadcast all chat :)', m)
}
handler.help = ['broadcastall','bcall'].map(v => v + ' <teks>')
handler.tags = ['owner]
handler.command = /^(broadcastall|bcall)$/i
handler.owner = true

module.exports = handler
                
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
                
const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
