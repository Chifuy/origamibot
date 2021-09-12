let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.01
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Jumlah 💸Dollar Yang Ingin Ditransfer!'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Salah Satu Lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya Angka'
    let poin = parseInt(txt)
    let dollar = poin
    let pjk = Math.ceil(poin * pajak)
    dollar += pjk
    if (dollar < 5) throw 'Minimal 5'
    let users = global.db.data.users
    if (dollar > users[m.sender].dollar) throw '💸Dollar Tidak Cukup Untuk Ditransfer'
    users[m.sender].dollar -= dollar
    users[who].dollar += poin

    m.reply(`${-poin} 💸Dollar  + ${-pjk} 💸Dollar = ${-dollar} 💸Dollar`)
    conn.fakeReply(m.chat, `+${poin} 💸Dollar`, who, m.text)
}
handler.help = ['paydollar @user <amount>']
handler.tags = ['dd']
handler.command = /^paydollar$/i
handler.rowner = false

module.exports = handler

