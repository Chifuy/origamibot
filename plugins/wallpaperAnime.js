const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*© Origami-Bot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner Belum Membayar Tagihan Fitur Ini*_'
    }
}
handler.help = ['wallpaperanime']
handler.tags = ['weeaboo']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
