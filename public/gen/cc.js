exports.name = '/gen/cc';
const axios = require('axios')
const cheerio = require('cheerio')
exports.index = async (req, res, next) => {
  var q = req.query.q || 1
  var o = []
  for(i = 0; i < q; i++){
      const resp = await axios.get('https://randommer.io/Card')
  const html = resp.data
    const $ = cheerio.load(html)
  const data = $('div[class="container"]').find('main[role="main"] > div[class="row my-3"]')
    o.push({
  "card": $(data).find('div[id="cardNumber"]').text(),
  "name": $(data).find('div[id="name"]').text(),
  "cvv": $(data).find('div[id="cvv"]').text(),
  "pin": $(data).find('div[id="pin"]').text(),
  "date": $(data).find('div[id="expDate"]').text()
  })
  }
  return res.jsonp(o)
}