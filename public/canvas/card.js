const fs = require('fs');
const path = require('path');
exports.name = '/fbcover/v1';
exports.index = async(req, res, next) => {
  try{
    module.exports.circle = async(image) => {
        const jimp = require("jimp")
        image = await jimp.read(image);
        image.circle();
        return await image.getBufferAsync("image/png");
    }
    const { loadImage, createCanvas, registerFont } = require("canvas");
    const request = require('request');
    const fs = require("fs-extra")
    const axios = require("axios")
    let pathImg = __dirname + `/!cache/sumi.png`;
    let pathAva = __dirname + `/!cache/sumi2.png`;
    const path = require("path")
    const Canvas = require("canvas")
    const __root = path.resolve(__dirname, "cache");
    var tenchinh = req.query.name
    var location = req.query.location
    var fl = req.query.fl
    var birthday = req.query.birthday
    var subname = req.query.gioitinh
    var love = req.query.love
    var uid = req.query.uid
    var link = req.query.link
    var hometown = req.query.hometown
  if(!uid) {res.jsonp('concac')}
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/rqbC4ES.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(getAvatarOne, 'utf-8'));
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
  var avatar = await this.circle(pathAva);
    if(!fs.existsSync(__dirname+`/!cache/Play-Bold.ttf`)) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`/!cache/Play-Bold.ttf`, Buffer.from(getfont, "utf-8"));
    };
  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 910, 465, 229, 229);
   registerFont(__dirname+`/!cache/Play-Bold.ttf`, {
        family: "Play-Bold"
    });
  ctx.font = `35px Play-Bold`;
  ctx.fillStyle = "#00FFFF";
  ctx.textAlign = "start";
  fontSize = 60;
  ctx.fillText(`Tên: ${tenchinh}`, 340, 560);
  ctx.fillText(`Giới tính: ${subname}`, 1245, 448);
  ctx.fillText(`Follow: ${fl}`, 1245, 505);
  ctx.fillText(`Mối quan hệ: ${love}`, 1245, 559);
  ctx.fillText(`Sinh nhật: ${birthday}`, 1245, 616);
  ctx.fillText(`Nơi ở: ${location}`, 1245, 668);
  ctx.fillText(`Quê hương: ${hometown}`, 1245, 723);
    ctx.font = `28px Play-Bold`;
  ctx.fillStyle = "#FFCC33";
  ctx.textAlign = "start";
  fontSize = 60;
  ctx.fillText(`🔗 UID: ${uid}`, 800, 728);
  ctx.beginPath();
  ctx.font = `28px TUVBenchmark`;
  ctx.fillStyle = "#00FF00";
  ctx.textAlign = "start";
  fontSize = 60;  
  ctx.fillText(`» Profile: ${link}`, 41, 720);
  ctx.beginPath();
   const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    return res.sendFile(pathImg);
} catch(e){
    console.log(e)
}}