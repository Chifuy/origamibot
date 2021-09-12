let handler = async (m, { conn }) => {
    
  let txt = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v =>`${conn.getName(v.jid)}\n${v.jid} `).join`\n\n`
  conn.reply(m.chat, 'List Chat:\n\n' + txt, m)
}
handler.help = ['chatlist']
handler.tags = ['info']
handler.command = /^(chat(s|list))$/i

module.exports = handler

