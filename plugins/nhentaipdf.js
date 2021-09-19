let { get } = require('axios')
let handler = async (m, { conn, args }) => {
   if (!args[0]) throw 'Ehm...kode nuklir nya mana?' 
   let lol = global.API('lolhum', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
   let { result } = (await get(lol)).data
   if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendMessage(m.chat, await getBuffer(result), 'documentMessage', { quoted: m, filename: `Tobat Bro Tobat.pdf`, mimetype: 'application/pdf' })
}
handler.help = ['nhen','nhentai'].map(v => v + ' <kode>')
handler.tags = ['weeaboo']
handler.command = /^nhen(entai)?$/i
handler.premium = true

module.exports = handler



async function getBuffer(url) {

k = await require('node-fetch')(url)

a = await k.buffer()

return a 

}