exports.name = '/tiktok/info';
const axios = require('axios')
exports.index = async (req, res, next) => {
  var link = req.query.username
 const resp = (await axios.get("https://www.tiktok.com/node/share/user/@" + link  + "?aid=1988", {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /"
        }
      }));
  if (resp.status == 200) {
    const ress = resp.data
    return res.jsonp( ress );
  } 
  else{
    return res.jsonp({ error: "đã xảy ra lỗi" });
  }
}