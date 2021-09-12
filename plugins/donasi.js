let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'DONASI')).buffer(), `
╭─「 Donasi • Pulsa 」
│ • Indosat/IM3 [085747543536]
│ • Smartfren [088232733050]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO,DANA,GoPay [085747543536]
│ • ShopeePay
╰────

Thanks
`.trim(), '© Origami-Bot', 'PREMIUM', '!prem', 'SEWA', '!sewa', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
