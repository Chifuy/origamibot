let fetch = require('node-fetch')
const fs = require('fs')
let handler = async(m, { conn, usedPrefix, command }) => {
    let toko = JSON.parse(fs.readFileSync(`./src/toko.json`))
    let json = toko[Math.floor(Math.random() * toko.length)]
    let caption = `
*Product:* 
${json.name}

*Deskripsi:*
${json.desc}

*Penjual:*
wa.me/${json.jual}
`.trim()
    await conn.send2ButtonImg(m.chat, await(await fetch(json.img)).buffer(), caption, 'Mau produknya dipajang juga? Klik tombol NEXT', 'NEXT➡ ️', '!produk', 'JUAL📥', '!jual', m)
}
handler.help = ['produk']
handler.tags = ['toko']
handler.command = /^produk$/i
// Punya Si Fadli Bandar Bokep
module.exports = handler