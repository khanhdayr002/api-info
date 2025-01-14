exports.name = '/facebook/video';
'use strict';
const fs = require('fs')

const axios = require('axios')
exports.index = async (req, res, next) => {
 var url = req.query.url
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "sb=RFjrYgEwfYuW6yTqITLbAmN0; datr=OY7SYypjp_XrNe-ARViUrepM; locale=en_GB; c_user=100060362055114; dpr=1.100000023841858; xs=8%3Ah2cUsOp0YGG2Ug%3A2%3A1676697882%3A-1%3A5883%3A%3AAcX0NCd4ctKI4_xJWKWseKLlcHcyRXeNnCFZWv6xRwc; fr=0ZtsL6aA6U3nZ7sw4.AWXGmhQiNI8ORZo-0oyjGG5FrE8.Bj828p.Hl.AAA.0.0.Bj83Cv.AWVULHYBClw; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1676898493471%2C%22v%22%3A1%7D; wd=564x634"
  };
  /**
   * @param {string} callbackId
   * @return {?}
   */
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(function (resolve) {
     if (!url || !url.trim()) {
       return res.jsonp("Thiếu url facebook");
     }
     if (!url.includes("facebook.com")) {
       return res.jsonp("Vui lòng nhập video facebook hợp lệ!");
  }
    axios.get(url, {
      headers: data
    }).then(function (rawResponse) {
      var data = rawResponse.data;
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
      var d = data.match(/"text":"(.*?)"/)[1]
      console.log(d)
      //fs.writeFileSync('a.txt',d)
      if (nodes && nodes[1]) {
        var result = {
          title: d,
          url: url,
          sd: wrap(nodes[1]),
          hd: match && match[1] ? wrap(match[1]) : "",
          thumbnail: object && object[1] ? wrap(object[1]) : ""
        };
        res.jsonp(result);
      } else {
       res.jsonp("Cookie die nên không thể tải video trong group!");
      }
    })
  });
}