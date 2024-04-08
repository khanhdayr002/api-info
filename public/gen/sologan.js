//https://backend.zyro.com/v1/ai/slogans method post
const axios = require('axios')
exports.name = "/sologans"
exports.index = async (req, res, next) => {
  try{
  const resp = (await axios({
    url: "https://backend.zyro.com/v1/ai/slogans",
    method: "post",
    data: {
      keyword: req.query.keyword
    }
  })).data
  return res.status(200).send(resp.slogans)
} catch(e){
    console.log(e)
}
}