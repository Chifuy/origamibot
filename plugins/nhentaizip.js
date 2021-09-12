let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Masukkan text', m)
let link = 'https://nhder.herokuapp.com/download/nhentai/' + text + '/zip'
conn.sendFile(m.chat, link, 'Stay Halal.zip',  '_Nihh_', m)
conn.fakeReply(m.chat, 'Sedang Diproses...','0@s.whatsapp.net','Origami-Bot')
}
handler.help = ['nhen2 <kode>','nhentai2 <kode>']
handler.tags = ['weeaboo']
handler.command = /^(nhen2|nhentai2)$/i
handler.premium = true

module.exports = handler