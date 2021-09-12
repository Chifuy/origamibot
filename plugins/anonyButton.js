let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'ANONYMOUS CHAT')).buffer(), `
Hay, ${conn.getName(m.sender)}👋🏻
Welcome Di Anonymous Chat!

Ketik ${usedPrefix}start untuk memulai
Ketik ${usedPrefix}next untuk skip/lanjut
Ketik ${usedPrefix}leave untuk keluar/stop
`.trim(), 'Anonymous Chat\n© Origami-Bot', 'START', '!start', 'NEXT',  '!next', 'LEAVE', '!leave', m)
handler.help = ['anonymous']
handler.tags = ['main']
handler.command = /^anony(mous|chat)$/i
handler.private = true

module.exports = handler