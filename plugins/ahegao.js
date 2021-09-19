let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('xteam', '/randomimage/ahegao', {}, 'APIKEY'), 'ahegao.png', 'Ahegao nya kak', m)
}
handler.help = ['ahegao']
handler.tags = ['weeaboo']
handler.command = /^ahegao$/i
handler.premium = true

module.exports = handler