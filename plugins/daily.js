const free = 500
const prem = 5000
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `Anda Sudah Mengeclaim Hari Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi, Untuk Kembali Mengeclaim`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  await conn.sendButton(m.chat, `Selamat!\nKamu Mendapatkan *${isPrems ? prem : free} XP*`, '© Origami-Bot', 'CLAIM 📦XP BOX', '!arongans')
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['claim']
handler.tags = ['xp']
handler.command = /^claim$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}

