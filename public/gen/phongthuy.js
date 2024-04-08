exports.name = '/xemphongthuy';
const axios = require('axios'), cheerio = require('cheerio');
exports.index = async (req, res, next) => {
  var q = req.query.q;
  var last4number = q.slice(-4)
  if(!q || isNaN(q)) return
  var o = []
axios.get('https://simkinhdich.com/xem-sim-phong-thuy-4-so-cuoi?loai=4&sim=' + last4number).then(resp => {
  const $ = cheerio.load(resp.data)
  var sttque = $('div[class="ket-qua"] > h2').text().split('-')[1].trim()
  var nx = $('div[class="ket-qua"] > h3').text();
  var kl = $('div[class="ket-qua"] > div[class="kq-4s"] > span').text().trim()
  res.jsonp({sttque, nx, kl })
})
}
//https://lichngaytot.com/Ajax/XemSDTtheophongthuyAjax
//dateOfBirth: 01-06-1992 phone: 0334819872