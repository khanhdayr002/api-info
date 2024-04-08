exports.name = '/canvas/jo';
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const path = require('path');
const axios = require('axios');
const jimp = require("jimp")
exports.index = async (req, res, next) => {
  try{
  module.exports.circle = async (image) => {
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
  if(!fs.existsSync(__dirname+`/!cache/Semi.ttf`)) { 
  let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(__dirname+`/!cache/Semi.ttf`, Buffer.from(getfont, "utf-8"));
    };
  let { id, name, memberst, boxname } = req.query;
  if(!id ||!name ||!memberst ||!boxname) {
    return res.send({
      status: 'err',
      msg: 'con cac'
    })
  }
  let pathImg = __dirname + `/!cache/fbcover1.png`;
  let pathAva = __dirname + `/!cache/fbcover2.png`;
  let avtAnime = (await axios.get(encodeURI(
    `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1371688333316058|yqnZCV_SATCp9jPHNUQZaj5_C_Y`,{
      headers:{
        cookie:'xs=13%3AlajUELLXiJWSGA%3A2%3A1670218018%3A-1%3A6326;c_user=100026039134645;fr=04yhWc9aZ2jCK6WYB.AWX6H8d2OYiFMQa_tmHEcMP9bNY.BjjYEe.-o.AAA.0.0.BjjYEi.AWW2404AO5I;sb=HoGNYx-MLHOu0FOMeC8kqttW;datr=HoGNY-xBBNLJjRghcnhN1hWA;'
      }
    }), { responseType: "arraybuffer" })).data;
    var ok = [
      'https://i.imgur.com/dDSh0wc.jpeg',
'https://i.imgur.com/UucSRWJ.jpeg',
'https://i.imgur.com/OYzHKNE.jpeg',
'https://i.imgur.com/V5L9dPi.jpeg',
'https://i.imgur.com/M7HEAMA.jpeg'
             ]
  let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    var avatar = await this.circle(pathAva);
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  registerFont(__dirname+`/!cache/Semi.ttf`, {
        family: "Semi"
    });
  let canvas = createCanvas(1902, 1082);
    console.log(canvas.width, canvas.height)
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "center";
  ctx.font = `155px Semi`;
  ctx.fillText(`${name}`, canvas.width / 2 + 20 , canvas.height / 2 + 100);
  ctx.save();
  ctx.font = `75px Semi`;
  ctx.fillText(`Chào mừng ${boxname}`, canvas.width / 2 - 15 , canvas.height / 2 + 235)
  ctx.fillText(`Thành viên thứ ${memberst}`, canvas.width / 2 - 15 , canvas.height / 2 + 350)
  ctx.restore();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return res.sendFile(pathImg);
} catch(e){
    console.log(e)
}}