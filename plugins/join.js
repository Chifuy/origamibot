let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.send2Button(res.gid, `
Hay, Aku *${conn.user.name}*
Aku Diundang Oleh @${m.sender.split`@`[0]}

Ketik ${usedPrefix}menu untuk memulai nya ya..
`.trim(), 'Patuhi rules yah kak..\n\n© Origami-Bot', 'MENU', `${usedPrefix}menu`, 'RULES', '!rules',m, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['owner']
handler.command = /^join$/i
handler.rowner = true

module.exports = handler
