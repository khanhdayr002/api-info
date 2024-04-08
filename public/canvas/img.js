
exports.name = '/fb/avt';
const axios = require('axios')
const fs = require('fs')
const cheerio = require('cheerio')
exports.index = async (req, res, next) => {
  try{
    const id = req.query.id
    if(!id) return res.jsonp({ data: 'Co Cai Dau Buoi'})
    const resp = await axios.post('https://upscaler.zyro.com/v1/ai/image-upscaler',{
  image_data: id
});
    return res.jsonp({data: resp.data.upscaled})
  // fs.writeFileSync( __dirname + "/avt.png", Buffer.from(Avatar, "utf-8"));
  //   fs.createReadStream(__dirname + "/avt.png")
  // res.set({ "Content-Type": "image/png" })
  // res.send(Avatar)
} catch(e){console.log(e)}}