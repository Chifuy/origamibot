let handler = m => m

handler.all = async function (m) {
    if (m.fromMe || m.isBaileys) return !0
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 7) {
                global.db.data.users[m.sender].banned = true
                await this.sendButton(m.chat, `「 SPAM DETECTED 」\n\nMaaf, kamu diBanned`, '', 'OWNER', '!owner', m)
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler
