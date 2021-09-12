let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.ganteng)}”`, m)
}
handler.help = ['gantengcek']
handler.tags = ['fun']
handler.command = /^(gantengcek)$/i
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

global.ganteng = [
'Ganteng Level : 4%\n\nIni Muka Atau Sampah?!',
'Ganteng Level : 7%\n\nSerius Ya..., Lu Hampir Mirip Kayak Monyet!',
'Ganteng Level : 12%\n\nMakin Lama Liat Muka Lo Gw Bisa Muntah!',
'Ganteng Level : 22%\n\nMungkin Karna Lo Sering Maksiat',
'Ganteng Level : 27%\n\nKayaknya Bakal Susah Dapet Jodoh Lu, Berdoa Aja',
'Ganteng Level : 35%\n\nYang Sabar Ya Om :/',
'Ganteng Level : 41%\n\nSemoga Diberkati Mendapat Jodoh',
'Ganteng Level : 48%\n\nDijamin Cewek Susah Deketin Lo',
'Ganteng Level : 56%\n\nLu Setengah Ganteng :v',
'Ganteng Level : 64%\n\nCukuplah',
'Ganteng Level : 71%\n\nLumayan Ganteng Juga Lu',
'Ganteng Level : 1%\n\nAwokwok Buriq!',
'Ganteng Level : 77%\n\nEngga Akan Salah Lagi Dah Om',
'Ganteng Level : 83%\n\nBeuh... Dijamin Cewek Engga Akan Kecewa Om',
'Ganteng Level : 89%\n\nCewek-cewek Pasti Auto Salfok Kalo Ngeliat Lo!',
'Ganteng Level : 94%\n\nAARRGGHHH!!!',
'Ganteng Level : 100%\n\nLU EMANG COWOK TERGANTENG YANG PERNAH GW LIAT!!!',
]
