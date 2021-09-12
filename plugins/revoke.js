let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('Link Group Berhasil Direset!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + res.code)
}
handler.help = ['reslink']
handler.tags = ['group']
handler.command = /^re(voke|slink)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
