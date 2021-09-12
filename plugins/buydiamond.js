const buahperdiamond = 1500
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buyd/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].diamond / buahperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].buah >= buahperdiamond * count) {
    global.db.data.users[m.sender].buah -= buahperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `-${buahperdiamond * count} 🍑Fruit\n+ ${count} 💎Diamond`, m)
  } else conn.reply(m.chat, `🍑Fruit Tidak Mencukupi Untuk Membeli ${count} 💎Diamond`, m)
}
handler.help = ['buyd <jumlah buah>', 'buydall']
handler.tags = ['dd']
handler.command = /^buyd([0-9]+)|buyd|buydall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

