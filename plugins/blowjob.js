let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 m.reply('Searching...')
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/blowjob', {}, 'APIKEY'), 'nsfw.png', 'Buat Ngocok Ya?', m)
}
handler.help = ['blowjob']
handler.tags = ['weeaboo']
handler.command = /^blowjob$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
