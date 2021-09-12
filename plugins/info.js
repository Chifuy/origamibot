let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'INFO BOT')).buffer(), `╭───「 INFO • BOT 」
│ • Group: https://rotf.lol/OBOffic
│ • TikTok: https://rotf.lol/origamitt
│ • Script: Nurutomo
│ • ApiKey: X-Team
│ • Device: Xiaomi Redmi 6A [Potato]
│ • Data: Indosat Ooredoo [IM3]
│ • Name: Origami-Bot
│ • Owner: Aron
│
│ ╭──「 Kawan-kawan Bot 」
│ │ • SRT BOT =>  Rie
│ │ • Zafkiel-Bot => Rafli
│ │ • Kyura-Bot => Kyura
│ │ • ZakBotZ => ZakiGanZ
│ │ • Dan Kawan-kawan Yang Lain :)
│ ╰────
╰────────
`, '© Origami-Bot', 'OWNER', '!owner', 'DONASI', '!donasi', 'SCRIPT', '!linksc', m)//Au Ah Pusing Aku (Aron)
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler