let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    m.reply(`Searching`)
    await conn.sendFile(m.chat, global.API('xteam', '/randomimage/ass', {}, 'APIKEY'), 'ass.png', 'Mau ngocok ya..?', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['ass']
handler.tags = ['weeaboo']
handler.command = /^ass$/i
handler.premium = true

module.exports = handler