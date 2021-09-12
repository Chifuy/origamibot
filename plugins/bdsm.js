let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/bdsm', {}, 'APIKEY'), 'bdsm.png', 'Nih bdsm-nya', m)
}
handler.help = ['bdsm']
handler.tags = ['weeaboo']
handler.command = /^bdsm$/i
handler.premium = true

module.exports = handler
