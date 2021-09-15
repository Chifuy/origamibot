let fetch = require('node-fetch')
let image = 'https://telegra.ph/file/b277fb63f78d5a51fbbf6.jpg'
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
Mau hapus chat apa..?
`.trim(), '', 'CHAT GROUP', '!deletechat group', 'CHAT PRIVATE', '!deletechat chat', 'CHAT ALL', '!deletechat all', m)
handler.help = ['dlt']
handler.tags = ['host']
handler.command = /^dlt$/i
handler.owner = true

module.exports = handler
