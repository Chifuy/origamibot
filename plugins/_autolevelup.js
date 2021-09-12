let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup) return !0
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
    if (before !== user.level) {
       this.sendButton(m.chat, `
Berhasil Level Up!
*${before}* => *${user.level}*
Gunakan *!profile* Untuk Mengecek
    `.trim(), '', 'PROFILE', '!profile', m)
        }
}

module.exports = handler
