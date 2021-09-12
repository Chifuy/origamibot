let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/bts', {}, 'APIKEY'), 'BaTueS.png', '#btsanjing', m)
}
handler.help = ['batues']
handler.tags = ['internet']
handler.command = /^batues$/i
handler.premium = true

module.exports = handler