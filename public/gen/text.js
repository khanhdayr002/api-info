const cheerio = require('cheerio')
const axios = require('axios')
let { JSDOM } = require('jsdom')

exports.name = '/gen/text';
exports.index = async (req, res, next) => {
    const resp = (await axios.get('http://qaz.wtf/u/convert.cgi?text=' + encodeURI(req.query.text))).data
  let dom = new JSDOM(resp)
  let table = dom.window.document.querySelector('table').children[0].children
  let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
  return res.jsonp(obj)
}
