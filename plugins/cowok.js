let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/cowo', {}, 'APIKEY'), 'cowo.png', 'Ganteng kan?', m)
}
handler.help = ['cowok']
handler.tags = ['internet']
handler.command = /^cowo(k)$/i
handler.limit = true

module.exports = handler