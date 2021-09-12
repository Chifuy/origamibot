const axios = require('axios')
let handler = async(m, { conn, text }) => {
    new Promise((resolve, reject) => {
        axios.get(`http://newsapi.org/v2/top-headlines?country=id&apiKey=ecf0c0a08f0a437c920c25130fab8054`)
            .then((res) => {
                conn.sendFile(m.chat, res.data.articles[0].urlToImage, 'text', `➸ *Author* : ${res.data.articles[0].author}\n\n➸ *Title* : ${res.data.articles[0].title}\n\n➸ *Desc* : ${res.data.articles[0].description}\n\n➸ *Link* : ${res.data.articles[0].url}\n\n➸ *PublishedAt* : ${res.data.articles[0].publishedAt}`, m)
            })
            .catch(reject)
    })
}

handler.help = ['berita', 'news']
handler.tags = ['internet']
handler.command = /^(berita|news)$/i

module.exports = handler
