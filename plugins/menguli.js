let handler = async (m, { conn }) => {
  let hasil = Math.floor(Math.random() * 50)
global.db.data.users[m.sender].diamond += hasil
   await m.reply(`Selamat Anda Mendapatkan *${hasil} 💎Diamond!*`)
}

handler.help = ['menguli']
handler.tags = ['game']
handler.command = /^menguli$/i
handler.limit = 3

module.exports = handler