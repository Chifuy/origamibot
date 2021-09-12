let levelling = require('../lib/levelling')


let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Gagal Level Up!
Level *${user.level}*
Kurang *${max - user.exp} Exp* Lagi!
`.trim()
  }
  let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
       await conn.send2Button(m.chat, `
Berhasil Level Up!
*${before}* => *${user.level}*

Ketik ${usedPrefix}profile untuk mengeceknya
Ketik ${usedPrefix}rankcard untuk cek card nya
`.trim(), '© Origami-Bot', 'PROFIlE', '!profile', 'RANK CARD', '!rank', m)
        }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.command = /^levelup$/i

module.exports = handler
