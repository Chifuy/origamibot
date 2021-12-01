let fetch = require('node-fetch')
nst { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda Sudah Registrasi\nMau Registrasi Ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format Salah\n*${usedPrefix}reg nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur nya terlalu tua :v'
  if (age < 8) throw 'Masih kecil engga boleh pake Bot yah.. dek'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let pp = await this.getProfilePicture(user)
  await this.send2ButtonLoc(m.chat, await (await fetch(pp)).buffer(), `
Register Berhasil!

╭─「 INFO 」
│ Nama: ${name}
│ Umur: ${age} Tahun
│ SN: 
│ ${sn}
╰────
`.trim(), '© Origami-Bot', '🗣️ PROFILE', `${usedPrefix}profile`, '⋮☰ MENU', `${usedPrefix}menu`, m)
}
handler.help = ['reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['Exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

