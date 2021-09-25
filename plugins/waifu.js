let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix }) => {
  m.reply('Searching...')
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Istri Kok 2D :v', '', '🔍 Search WAIFU', `${usedPrefix}waifu`, m)
}
handler.help = ['waifu']
handler.tags = ['weeaboo']
handler.limit = true
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
