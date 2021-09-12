const diamondperlimit = 35
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^diamondtolimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].diamond / diamondperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].diamond >= diamondperlimit * count) {
    global.db.data.users[m.sender].diamond -= diamondperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${diamondperlimit * count} 💎Diamond\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `💎Diamond Tidak Mencukupi Untuk Membeli ${count} Limit`, m)
}
handler.help = ['diamondtolimit <limit>', 'diamondtlall']
handler.tags = ['dd']
handler.command = /^diamondtolimit([0-9]+)|diamondtolimit|diamondtlall$/i

module.exports = handler