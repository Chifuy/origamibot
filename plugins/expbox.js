let handler = async (m, { isPrems }) => {
    let yoi = Math.floor(Math.random() * 5)
    let yoih = Math.floor(Math.random() * 10)
  global.db.data.users[m.sender].xpbox += isPrems ? yoi : yoih
  m.reply(`Selamat Kamu Mendapat Kan ${isPrems ? yoi : yoih} 📦Xp Box`)
}
handler.command = /^arongans$/i
handler.register = true

module.exports = handler