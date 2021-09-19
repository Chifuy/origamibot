let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 m.reply('Searching...')
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/nsfwneko', {}, 'APIKEY'), 'nsfw.png', 'Hayuu Mau Ngapain...?', m)
}
handler.help = ['nsfwneko']
handler.tags = ['weeaboo']
handler.command = /^nsfwneko$/i
handler.premium = true

module.exports = handler