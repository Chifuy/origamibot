let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].ngemis < 600) throw 'Tunggu Beberapa Menit Untuk Kembali Maling'
  let hasil = Math.floor(Math.random() * 17)
global.db.data.users[m.sender].dollar += hasil
   await m.reply(`Selamat Kamu Mendapatkan *${hasil} 💸Dollar*`)
global.db.data.users[m.sender].ngemis = new Date * 1
}

handler.help = ['memaling']
handler.tags = ['game']
handler.command = /^memaling$/i
handler.limit = 2

module.exports = handler