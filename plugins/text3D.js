let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://api.zeks.xyz/api/text3d?apikey=apivinz&text=' + text

    conn.sendFile(m.chat, link, 'bokehtext.png', 'Nih Kak Text 3D nya!', m)
    conn.fakeReply(m.chat, 'Tunggu Ya...','0@s.whatsapp.net','*Origami-Bot*')
}
handler.help = ['text3d'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(text3d)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
