let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'PREMIUM HARIAN')).buffer(), `
╭─「 Premium • Non Pulsa 」
│ • 7 Hari => 7K [DANA/GoPay]
│ • 14 Hari => 13K [DANA/GoPay]
╰────

╭─「 Premium • Pulsa 」
│ • 7 Hari => 10K [Indosat/Smartfren]
│ • 14 Hari => 20K [Indosat/Samartfren]
╰────

*NOTE:*
Silahkan Chat Owner Jika Ingin Premium
`, '© Origami-Bot', 'OWNER', '!owner', m)

handler.command = /^premharian$/i

module.exports = handler
