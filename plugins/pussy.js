let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 m.reply('Searching...')
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/pussy', {}, 'APIKEY'), 'nsfw.png', 'Mau Coli Ya?', m)
}
handler.help = ['pussy']
handler.tags = ['weeaboo']
handler.command = /^pussy$/i
handler.premium = true

module.exports = handler
