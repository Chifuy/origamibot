let fs = require('fs')                                
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
 })
global.owner = ['6285747543536'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  dhnjing: 'https://dhnjing.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://api.hardianto.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyanda',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.lolhuman.xyz' : 'BandarBokep',
  'https://api.hardianto.xyz' : 'hardianto'
}

// Sticker WM
global.packname = 'Origami-Bot'
global.author = 'Aron'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 70 // The higher, The harder levelup


