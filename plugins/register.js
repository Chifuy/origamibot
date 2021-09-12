const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda Sudah Registrasi\nMau Registrasi Ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format Salah\n*${usedPrefix}reg nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama Tidak Boleh Kosong (Alphanumeric)'
  if (!age) throw 'Umur Tidak Boleh Kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur nya Terlalu Tua Kak :v'
  if (age < 8) throw 'Masih Kecil Engga Boleh Pake Yah!'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Register Berhasil!

╭─「 INFO 」
│ Nama: ${name}
│ Umur: ${age} Tahun
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['Exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

