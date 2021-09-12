let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://api.zeks.xyz/api/sandw?apikey=apivinz&text=' + text

    conn.sendFile(m.chat, link, 'bokehtext.png', 'Nih Kak!', m)
    conn.fakeReply(m.chat, 'Tunggu Ya...','0@s.whatsapp.net','*Origami-Bot*')
}
handler.help = ['sandw'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(sandw)$/i
handler.limit = true

module.exports = handler
