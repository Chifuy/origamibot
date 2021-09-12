let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'Dark Jokes', m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i

module.exports = handler
