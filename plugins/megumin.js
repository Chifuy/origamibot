let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  m.reply('Searching...')
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'megumin.jpg', '>///<', m)
}
handler.help = ['megumin']
handler.tags = ['weeaboo']
handler.limit = 3
handler.command = /^(megumin)$/i
//ftwrr
module.exports = handler