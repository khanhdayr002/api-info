exports.name = '/fifa'
exports.index = async (req, res, next) => {
  const q = req.query.q;
  const axios = require('axios');
const resp = await axios.get(`https://vn.fifaaddict.com/api2?q=fo4db&playername=${encodeURI(q)}`,{
  headers:{
    referer: 'https://vn.fifaaddict.com/',
    host: 'vn.fifaaddict.com',
    accept: 'application/json, text/plain, */*',
'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
'sec-ch-ua-mobile': '?0',
'sec-ch-ua-platform': "Windows",
'sec-fetch-dest': 'empty',
'sec-fetch-mode': 'cors',
'sec-fetch-site': 'same-origin',
'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
  }
});
  return res.json(resp.data.db)
}