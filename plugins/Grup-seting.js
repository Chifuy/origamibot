let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
	'open': false,
	'buka': false,
	'on': false,
	'1': false,
	'close': true,
	'tutup': true,
	'off': true,
	'0': true,
    }[(args[0] || '')]
    if (isClose === undefined) {
	await conn.send2Button(m.chat, `
Hayo.. mau ngapain?
    `.trim(), '© Origami-Bot', 'OPEN', '!group 1', 'CLOSE', '!group 0', m)
	throw false
    }
    await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
