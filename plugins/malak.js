let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].ngemis < 300) throw 'Tunggu Beberapa Menit Untuk Kembali Malak'
  let hasil = Math.floor(Math.random() * 6) + 1
global.db.data.users[m.sender].dollar += hasil
   await m.reply(`Selamat!\nHasil Malak Kamu:\n*+${hasil} 💸Dollar*`)
global.db.data.users[m.sender].ngemis = new Date * 1
}

handler.help = ['malak']
handler.tags = ['game']
handler.command = /^malak$/i

module.exports = handler