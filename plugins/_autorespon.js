let fs = require('fs')
let fetch = require('node-fetch')
let image = 'https://telegra.ph/file/339da3177e0ea96c34eea.jpg'
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat, `Ehm.. iya ada apa kak?${m.msg.contextInfo.expiration == 604800 ? '\n\nMatiin Pesan Sementaranya, Biar Tombolnya Bisa Dipake' : ''}`.trim(), '© Origami-Bot', '⋮☰ MENU', '!menu', '☰ INFO GROUP', '!groupinfo', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2Button(m.chat, `
┌〔 SEWA BOT 〕
│
├ 30 Hari / Rp 10.000 
├ Permanen / Rp 15.000 
│
├ Silahkan hubungi @${global.owner[0]}
└────
`.trim(), '© Origami-Bot', 'OWNER', '!owner', 'SEWA BOT', '!sewa', m, { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    let ucap = /(ha(i|y|lo)|hi|bot)/i
    let isUcapan = ucap.exec(m.text)
    if (isUcapan && !m.fromMe) {
       await this.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
*Hay kak, ${conn.getName(m.sender)}👋🏻*

Perkenalkan aku adalah *${this.user.name}*, Bot whatsapp Indonesia
Apa ada yang bisa aku bantu?`, `*WhatsApp Bot By @${global.owner[0]}*`, '⋮☰ MENU', '!menu', '⎙ INFO', '!info', m, { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif Selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | Origami-Bot By Aron`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}