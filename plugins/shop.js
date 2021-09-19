let handler = async (m, { conn, usedPrefix }) => await conn.send2Button(m.chat, `
Hay, ${conn.getName(m.sender)}
Selamat Datang Dishop Origami-Bot (BETA)

Ketik ${usedPrefix}jual untuk menambahkan Produk anda
Ketik ${usedPrefix}produk untuk melihat Produk
`.trim(), 'Ini adalah sejenis Fitur untuk Berjualan\nSilhakan di pake dengan bijak\n\n© Origami-Bot', 'JUAL', '!jual', 'PRODUK', '!produk', m)
handler.help = ['shop']
handler.tags = ['main']
handler.command = /^shop(bot)?$/i

module.exports = handler