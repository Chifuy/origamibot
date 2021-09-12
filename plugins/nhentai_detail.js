//Zefkiel Bot, Haruno Bot
let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command}) => {
    if (!args[0]) throw `Masukkan kode, contoh: ${usedPrefix + command} 367983`
    let res = await fetch(global.API('lolhum', `/api/nhentai/${args[0]}`, {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let ayaka = `
Doujinshi Detail

*Title:* ${json.result.title_romanji}
*Title (Native):* ${json.result.title_native}
*Parodies:* ${json.result.info.parodies}
*Characters:* ${json.result.info.characters}
*Genres:* ${json.result.info.tags}
*Artists:* ${json.result.info.artists}
*Groups:* ${json.result.info.groups}
*Categories:* ${json.result.info.categories}
*Pages:* ${json.result.info.pages}
*Uploaded:* ${json.result.info.uploaded}
`.trim()
    await conn.send2ButtonImg(m.chat, await (await fetch(json.result.image[0])).buffer(), ayaka, 'Mau yang mana kak?', 'DOWNLOAD PDF', `.nhen ${args[0]}`, 'DOWNLOAD ZIP', `.nhen2 ${args[0]}`,m, { thumbnail: Buffer.alloc(0) })
}
handler.command = /^nhend$/i
handler.tags = ['weeaboo']
handler.help = ['nhend <code>']
handler.premium = true

module.exports = handler
