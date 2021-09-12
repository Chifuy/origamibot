let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=BandarBokep`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Huu.. pedo', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nsfwloli']
handler.tags = ['weeaboo']
handler.command = /^nsfwloli$/i
handler.premium = true

module.exports = handler