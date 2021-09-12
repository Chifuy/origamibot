let handler = async (m, { conn, isPrems, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    if (!teks) throw 'Uang Liburan Habis'
    let countrt = ['Inggris🇬🇧','Arab Saudi🇸🇦','Uni Emirate Arab🇦🇪','Sri Lanka🇱🇰','Finlandia🇫🇮','India🇮🇳','Australia🇦🇺','China🇨🇳','Jepang🇯🇵',]
let country = countrt[Math.floor(Math.random() * countrt.length)]
let yoi = Math.floor(Math.random() * 150) + 350
let yoih = Math.floor(Math.random() * 200) + 400
global.db.data.users[m.sender].dollar += isPrems ? yoih : yoi
global.db.data.users[m.sender].ngemis = new Date * 1
await conn.sendButton(`
Selamat, Kamu Bekerja Di *${country}* Dan Kamu Mendapatkan *${isPrems ? yoih : yoi} 💸Dollar*`, '', 'KERJA', '!kerja')
}

handler.help = ['kerja']
handler.tags = ['game']
handler.command = /^kerja/i
handler.premium = true

module.exports = handler