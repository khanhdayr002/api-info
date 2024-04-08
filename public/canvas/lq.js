exports.name = '/canvas/lienquan/couple';
const axios = require('axios')
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const path = require('path');
let pathImg = __dirname + `/!cache/avatar_1_22.png`;
let pathkhung = __dirname + `/!cache/avatar_1_221.png`;
let pathbg = __dirname + `/!cache/avatar_1_1.png`;
let xanh = __dirname + `/!cache/a1vatar_1_1.png`;
let yellow = __dirname + `/!cache/a.png`
let bt1 = __dirname + `/!cache/sa.png`
let bt2 = __dirname + `/!cache/sav.png`
exports.index = async (req, res, next) => {
  const config = require('./!cache/config.json')
  let botro = (await axios.get(encodeURI('https://i.imgur.com/rGV8aYs.png'), { responseType: "arraybuffer" })).data;
  fs.writeFileSync(bt1, Buffer.from(botro, "utf-8"));
    let botro2 = (await axios.get(encodeURI('https://i.imgur.com/YvuMkJ0.png'), { responseType: "arraybuffer" })).data;
  fs.writeFileSync(bt2, Buffer.from(botro2, "utf-8"));
  let vang = (await axios.get(encodeURI('https://lh3.googleusercontent.com/-XKb9e4hvTwA/YpSaiVJy7uI/AAAAAAAA8uk/RIadXcRAwxYN2V-8HWw6kMX1x44OKbwkQCNcBGAsYHQ/s0/vang.png'), { responseType: "arraybuffer" })).data;
  fs.writeFileSync(yellow, Buffer.from(vang, "utf-8"));
  let background = (await axios.get(encodeURI(config[0]['bg']), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
   let xanh1 = (await axios.get(encodeURI(config[0]['xanh']), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(xanh, Buffer.from(xanh1, "utf-8"));
    let khung = (await axios.get(encodeURI(config[0]['khung']), { responseType: "arraybuffer" })).data;
  let bg = (await axios.get(encodeURI(config[0]['bg1']), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathbg, Buffer.from(bg, "utf-8"));
  let b = await loadImage(pathImg);
  let a = await loadImage(pathkhung);
  let xz = await loadImage(xanh);
  let z = await loadImage(yellow);
  let bt_1 = await loadImage(bt1);
  let bt_2 = await loadImage(bt2)
  console.log(b.width, b.height)
  let canvas = createCanvas(b.width, b.height);
  var ctx = canvas.getContext("2d");
  ctx.drawImage(b, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(xz, config[0]['x1'], config[0]['y1'], 490, 690)
  ctx.drawImage(xz, config[0]['x2'], config[0]['y2'], 490, 690)
  ////////////////////////////////////////////////////////
  ctx.drawImage(z, config[0]['vx1'], config[0]['vy1'], 490, 550)
  ctx.drawImage(z, config[0]['vx2'], config[0]['vy2'], 490, 550)
  ///////////////////////////////////////////////////////
  ctx.drawImage(bt_1, config[0]['bt_1x'], config[0]['bt_1y'], 95, 95)
   ctx.drawImage(bt_2, config[0]['bt_2x'], config[0]['bt_2y'], 95, 95)
  ////////////////////////////////////////////////////////
  ctx.drawImage(a, config[0]['x1'], config[0]['y1'], 490, 690)
  ctx.drawImage(a, config[0]['x2'], config[0]['y2'], 490, 690)
  const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
}