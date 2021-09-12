function handler(m) {
  this.sendContact(m.chat, '6285747543536', 'Aron',m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler