//Zefkiel Bot, Haruno Bot
let fetch = require('node-fetch')
let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=c2cd9d0d9c945012818555c4`)
    json = await heum.buffer()
    conn.sendFile(m.chat, json, 'nulis', 'Huu.. sange kok sama  2D', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['hentai']
handler.tags = ['weeaboo']
handler.command = /^hentai$/i
handler.premium =true

module.exports = handler