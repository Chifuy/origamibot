let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'PREMIUM')).buffer(), `
╭─「 Premium • Non Pulsa 」
│ • DANA => 25K [Permanen]
│ • GoPay => 25K [Permanen]
╰────

╭─「 Premium • Pulsa 」
│ • Indosat => 40K [Permanen]
│ • Smartfren => 40K [Permanen]
╰────

*NOTE:*
Silahkan Chat Owner Jika Ingin Premium
`.trim(), '© Origami-Bot', 'PREM HARIAN', '!premharian', 'OWNER', '!owner', m)
handler.help = ['premium']
handler.tags = ['info']                                  
handler.command = /^(premium|prem)$/i

module.exports = handler