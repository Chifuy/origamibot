let fetch = require('node-fetch')
let image = 'https://telegra.ph/file/21979d3391311349c2b72.jpg'
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
Mau hapus chat apa..?
`.trim(), '', 'CHAT GROUP', '!deletechat group', 'CHAT PRIVATE', '!deletechat chat', 'CHAT ALL', '!deletechat all', m)
handler.help = ['dlt']
handler.tags = ['host']
handler.command = /^dlt$/i
handler.owner = true

module.exports = handler