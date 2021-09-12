let handler = async (m, { conn }) => {
  let hasil = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].dollar += hasil
   await m.reply(`Ngemis Kamu Berhenti!\nKamu Hanya Mendapatkan:\n*+${hasil} 💸Dollar*`)
global.db.data.users[m.sender].ngemis = new Date * 1
}

handler.help = ['ngemis']
handler.tags = ['game']
handler.command = /^ngemis$/i

module.exports = handler