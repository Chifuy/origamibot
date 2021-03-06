let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')
        let text = `*Informasi Group*\n
*ID:* 
${groupMetadata.id}

*Nama:* 
${groupMetadata.subject}

*Deskripsi:* 
${groupMetadata.desc}

*Total Anggota:*
${participants.length} Anggota

*Pembuat Grup:* 
@${m.chat.split`-`[0]}

*Admin Grup:*
${listAdmin}

*Pengaturan Bot:*
${antiLink ? '✅' : '❌'} Anti Link
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${isBanned ? '✅' : '❌'} Banned
${detect ? '✅' : '❌'} Detect
${stiker ? '✅' : '❌'} Stiker
${welcome ? '✅' : '❌'} Welcome

*Pengaturan Pesan Bot:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}


*Expired Day Tersisa:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['groupinfo']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.admin = true
handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik ";
    // +minutes+":"+sec;
}
