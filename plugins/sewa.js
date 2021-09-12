let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'SEWA')).buffer(), `
╭─「 SEWA • Non Pulsa 」
│ • 30 Hari => 10K [GoPay/DANA]
│ • Permanen => 15K [GoPay/DANA]
╰────

╭─「 SEWA • Pulsa 」
│ • 30 Hari => 15K [IM3/Smartfren]
│ • Permanen => 20K [IM3/Smartfren]
╰────

*NOTE:*
Silahkan Chat Owner Jika Ingin Menyewanya
`.trim(), '© Origami-Bot', 'OWNER', '.owner', m)
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler