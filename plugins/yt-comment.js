let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Here Is Your Comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['tools']

handler.command = /^(ytcomment)$/i

module.exports = handler
