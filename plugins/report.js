let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Kalo Kamu Nemu Pesan Eror, Lapor Pake Perintah Ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 450) throw `Laporan Terlalu Panjang, Maksimal 500 Karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Bot, Jika *${command.toLowerCase()}* Hanya Main-main Tidak Akan Ditanggapi!_`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler