const uploadImage = require('../lib/uploadImage')
let handler = async (m) => {
  m.reply('Video Sedang Diproses...')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Media Found'
  let media = await q.download()
  let url = await uploadImage(media)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/shaunthesheep', { url }, 'APIKEY'), 'shaunthesheep.mp4', 'Jangan Sedih Yah Kak...', m)
}
handler.help = ['shaunthesheep']
handler.tags = ['videomaker']
handler.limit = true
handler.tegister = true

handler.command = /^(shaunthesheep|sts)$/i

module.exports = handler

