
exports.name = '/fb/avt';
const axios = require('axios')
const fs = require('fs')
const cheerio = require('cheerio')
exports.index = async (req, res, next) => {
  try{
    const basetoken = '2712477385668128%7Cb429aeb53369951d411e1cae8e810640'
let Avatar = (await axios.get( `https://graph.facebook.com/4/picture?height=720&width=720&access_token=`+basetoken, { responseType: "arraybuffer" } )).data;
  fs.writeFileSync( __dirname + "/avt.png", Buffer.from(Avatar, "utf-8"));
    fs.createReadStream(__dirname + "/avt.png")
  res.set({ "Content-Type": "image/png" })
  res.send(Avatar)
} catch(e){console.log(e)}}