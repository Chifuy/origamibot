let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.cantik)}`, m)
}
handler.help = ['cantikcek']
handler.tags = ['fun']
handler.command = /^(cantikcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cantik = [
'Cantik Level : 4%\n\nIni Muka Atau Sampah?!',
'Cantik Level : 7%\n\nSerius Ya..., Lu Hampir Mirip Kayak Monyet!',
'Cantik Level : 12%\n\nMakin Lama Liat Muka Lo Gw Bisa Muntah!',
'Cantik Level : 22%\n\nMungkin Karna Lo Sering Maksiat',
'Cantik Level : 27%\n\nKayaknya Bakal Susah Dapet Jodoh Lu, Berdoa Aja',
'Cantik Level : 35%\n\nYang Sabar Ya By :/',
'Cantik Level : 41%\n\nSemoga Diberkati Mendapat Jodoh',
'Cantik Level : 48%\n\nDijamin Cowok Susah Deketin Lo',
'Cantik Level : 56%\n\nLu Setengah Cantik :v',
'Cantik Level : 64%\n\nCukuplah',
'Cantik Level : 71%\n\nLumayan Cantik Juga Lu',
'Cantik Level : 1%\n\nAwokwok Buriq!',
'Cantik Level : 77%\n\nEngga Akan Salah Lagi Dah Neng',
'Cantik Level : 83%\n\nBeuh... Dijamin Cowok Engga Akan Kecewa Neng',
'Cantik Level : 89%\n\nCowok-cowok Pasti Auto Salfok Kalo Ngeliat Lo!',
'Cantik Level : 94%\n\nAARRGGHHH!!!',
'Cantik Level : 100%\n\nLU EMANG CEWEK TERCANTIK YANG PERNAH GW LIAT!!!',
]
