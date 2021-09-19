let handler = async (m, { conn }) => {
let hasil = Math.floor(Math.random() * 5)
  global.db.data.users[m.sender].diamond += hasil
  m.reply(`Selamat Anda Mendapatkan *${hasil} 💎Diamond!*`)
  global.db.data.users[m.sender].mining = new Date * 1
}

handler.help = ['mining']
handler.tags = ['game']
handler.command = /^mining$/i

module.exports = handler