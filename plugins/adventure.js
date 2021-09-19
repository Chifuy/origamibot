let handler = async (m, { conn, isPrems, usedPrefix, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    if (!teks) throw 'Uang Liburan Habis'
    let countrt = ['Inggris🇬🇧','Arab Saudi🇸🇦','Uni Emirate Arab🇦🇪','Sri Lanka🇱🇰','Finlandia🇫🇮','India🇮🇳','Australia🇦🇺','China🇨🇳','Jepang🇯🇵','Korea Utara🇰🇵','Kenya🇰🇪','Timor Leste🇹🇱','Malaysia🇲🇾','Amerika Serikat🇺🇸','Kanada🇨🇦','Brazil🇧🇷','Swedia','Uzbekistan','Qatar','Thailand','Islandia','New Zealand','Papua Nugini','Mexsico','Texas','Singapore']
let country = countrt[Math.floor(Math.random() * countrt.length)]
let yoi = Math.floor(Math.random() * 1000)
let yoih = Math.floor(Math.random() * 1050)
let bekal = Math.floor(Math.random() * 25)
global.db.data.users[m.sender].exp += isPrems ? yoih : yoi
global.db.data.users[m.sender].buah += bekal 
global.db.data.users[m.sender].adventure = new Date * 1
await conn.sendButton(m.chat, `
*Perjalanan Kamu Berhenti!*
*Kamu Hanya Sampai Di ${country}*
*Dikarenakan :* ${text}

Hadiah Kamu!
*️⃣Exp: *+${isPrems ? yoih : yoi}*
🍑Fruit: *+${bekal}*
`.trim(), ' © Origami-Bot', 'ADVENTURE', `${usedPrefix}adventure`, m)
}

handler.help = ['adventure']
handler.tags = ['game']
handler.command = /^adventure/i

module.exports = handler
