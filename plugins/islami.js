let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
    let res = await fetch(API('hardianto', '/api/random/quotes/muslim', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    await conn.sendButton(m.chat, json.result.text_id, '© Origami-Bot', 'ISLAMI', `${usedPrefux}islami`, m)
}
handler.help = ['qislam']
handler.tags = ['quotes']
handler.command = /^islam(i)?$/i

module.exports = handler