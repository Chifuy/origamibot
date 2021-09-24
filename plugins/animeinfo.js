let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  conn.fakeReply(m.chat, `Searching...`, '447990653714@s.whatsapp.net', `Aku Wibu Dan Aku Bangga :v`, 'status@broadcast')
  if (!text) throw `Cari anime apa?`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
  let caption = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
➡️ *Start date:* ${start_date}
🔚 *End date:* ${end_date}
💬 *Show Type:* ${type}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendButtonImg(m.chat, await (await fetch(image_url)).buffer(), caption, '© Origami-Bot', `Manga ${text}`, `!manga ${title}`, m)
}
handler.help = ['anime <judul>']
handler.tags = ['weeaboo']
handler.command = /^anime(info)?$/i
//maapin fatur :<
module.exports = handler
