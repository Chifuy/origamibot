let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/cewek', {}, 'APIKEY'), 'cewek.png', 'Cantik kan?', m)
}
handler.help = ['cewek']
handler.tags = ['internet']
handler.command = /^cewe(k)$/i
handler.limit = true

module.exports = handler