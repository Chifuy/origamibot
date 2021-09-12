let handler = async (m, { usedPrefix }) => m.reply(`
「 RULES • BOT 」

> Dilarang Spam Chat/Command
> Dilarang Call/Video Call, Jika Kamu Tidak Ingin Diblock
> Premium Hanya 25K
> Dilarang Kirim Virus Ataupun Semacam nya


「 RULES • SEWA 」

> Dilarang Keras Kick Origami-Bot
> Bot Akan Keluar Jika Day Expired Sudah Habis
> Sewa Dibot Ini Tidak Mendapatkan Akses Premium :)

*NOTE:*
Jika Ada Fitur Yang Error Langsung Lapor Dengan Cara Ketik:
${usedPrefix}report <teks>
`.trim())
handler.command = /^rules$/i

module.exports = handler