let handler = async (m, { text, usedPrefix }) => {
    let goblok = `Pilihan Yang Tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nKasih Spasi!`
    if (!text) throw goblok
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\n\nKamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].dollar += 50
            m.reply(`Kamu Menang! +50 💸Dollar\n\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\n\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 50
            m.reply(`Kamu Menang!\n+50 💸Dollar\n\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\n\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 50
            m.reply(`Kamu Menang!\n+50 💸Dollar\n\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\n\nMamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw goblok
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.limit = 3

module.exports = handler
