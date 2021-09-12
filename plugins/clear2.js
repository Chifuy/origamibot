let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'DELETE CHAT')).buffer(), `
Mau hapus chat apa..?
`.trim(), '', 'CHAT GROUP', '!deletechat group', 'CHAT PRIVATE', '!deletechat chat', 'CHAT ALL', '!deletechat all', m)
handler.help = ['dlt']
handler.tags = ['host']
handler.command = /^dlt$/i
handler.owner = true

module.exports = handler