let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/mem', {}, 'APIKEY'), 'meme.png', '  ', m)
}
handler.help = ['meme2']
handler.tags = ['internet']
handler.command = /^meme2$/i

module.exports = handler