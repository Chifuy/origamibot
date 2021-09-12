let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
m.reply('Searching...')
let res = await fetch(global.API('xteam', '/randomimage/husbu', {}, 'APIKEY'))
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let { image, teks } = json.result
  conn.sendFile(m.chat, image, 'Husbu.jpg', `
❐ *HUSBU*
│
│ ${teks} 
└─
`.trim(), m)
}
handler.help = ['husbu']
handler.tags = ['weeaboo']
handler.command = /^(husbu)$/i

handler.limit = true

module.exports = handler