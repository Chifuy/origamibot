let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang diproses..')
  let res = `https://recoders-area.caliph.repl.co/api/loli`
  conn.sendFile(m.chat, res, 'loli.jpg', `Hati-hati FBI :v`, m, false)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['weeaboo']
handler.limit = 3
handler.command = /^loli$/i

module.exports = handler