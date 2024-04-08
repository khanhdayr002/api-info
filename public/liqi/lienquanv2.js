exports.name = '/canvas/liqivnv2';
var fontlink = 'https://drive.google.com/u/0/uc?id=1NWc8WLRqsAgNkpwgXA65Pw1v36ZLrCq9&export=download';
var lens = 'https://lh3.googleusercontent.com/-cuSSt1G8Z3w/Yjbmbn9FOWI/AAAAAAAA55o/0fmBE0nu5JAUwp_D5nebElkTEni_WVGjgCNcBGAsYHQ/s0/lens.jpg';
function text_(text1, fontname, text2, text3, fontsize, canvas, ctx) {
  do {
    fontsize--
    ctx.font = fontsize + 'px ' + fontname
  } while (ctx.measureText(text1).width > text3)
  ctx.fillText(text1, canvas.width / 2, text2)
}
exports.index = async (req, res, next) => {
  try {
    const config = require('./cache/index2.json');
    var { name, id, color } = req.query;
    if (!name || !id || id == 0) {
      res.send('error')
      return;
    }
    if (!color) {
      var color = `${config[id].c[2].v}`
    }
    const { loadImage, createCanvas, registerFont } = require("canvas");
    const axios = require('axios')
    const request = require('request');
    const path = require('path');
    const fs = require('fs');
    let pathbg = __dirname + `/cache/avatar_1_24q.png`;
    let pathImg = __dirname + `/cache/avatar_1_221.png`;
    if (!fs.existsSync(__dirname + `/cache/utm-eremitage-.ttf`)) {
      let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/utm-eremitage-.ttf`, Buffer.from(getfont, "utf-8"));
    };
    registerFont(__dirname + `/cache/utm-eremitage-.ttf`, {
      family: "UTM Eremitage"
    });
    let background = (await axios.get(encodeURI(`${config[id].c[1].v}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathbg, Buffer.from(background, "utf-8"))
    let logo = (await axios.get(encodeURI(`${lens}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"))
    let a = await loadImage(pathImg);
    let b = await loadImage(pathbg);
    let canvas = createCanvas(b.width, b.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(b, 0, 0, canvas.width, canvas.height);
    var name = name.toUpperCase();
    let canvas1 = createCanvas(1500, 300);
    let ctx1 = canvas1.getContext("2d");
    ctx1.save()
    ctx1.textAlign = 'center'
    ctx1.shadowColor = '#000'
    ctx1.shadowOffsetY = 10
    ctx1.shadowBlur = 20
    var jack = ctx1.createLinearGradient(0, 0, 0, 300)
    jack.addColorStop(0.2, color)
    jack.addColorStop(0.5, '#fff')
    ctx1.fillStyle = jack
    text_(name, 'UTM Eremitage', 150, 900, 150, canvas1, ctx1)
    ctx1.restore()
    for (l = 0; l < 3; l++) {
      ctx.drawImage(canvas1, 0, 1080, canvas.width, 300)
    }
    let canvas2 = createCanvas(a.width, a.height);
    let ctx3 = canvas2.getContext("2d");
   ctx3.save()
   ctx3.drawImage(a,0,0,a.width,a.height)
   ctx3.globalCompositeOperation = 'color'
   ctx3.fillStyle = color
   ctx3.fillRect(0, 0, a.width, a.height)
   ctx3.restore()
  ctx.save()
  ctx.globalCompositeOperation = 'screen'
  ctx.drawImage(canvas2,canvas.width / 2 - a.width / 2,1150,a.width,250)
    ctx.restore()
    ctx.save()
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
  } catch (e) {
    console.log(e)

  }
} 