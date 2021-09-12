let handler = async m => m.reply(`
*SCRIPT ORI:*
https://github.com/Nurutomo/wabot-aq

*APIKEY:*
https://api.xteam.xyz
`.trim())
handler.command = /^linksc$/i

module.exports = handler