//Zefkiel Bot, Haruno Bot
let fetch = require('node-fetch')
let handler  = async (m, { conn, args }) => {
 heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom/$(args[0]}?apikey=BandarBokep`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Huu.. sange kok sama  2D', m, false, { thumbnail: Buffer.alloc(0) })
}
  
handler.help = ['hentai']
handler.tags = ['weeaboo']
handler.command = /^hentai$/i
handler.premium =true

module.exports = handler