exports.name = '/canvas/liqivn';
var fontlink = 'https://drive.google.com/u/0/uc?id=1NWc8WLRqsAgNkpwgXA65Pw1v36ZLrCq9&export=download'
const axios = require('axios')
function text1_(text1, text2, text3, text4, text5, text6, text7) {
  do {
    text5--
    text7.font = text5 + 'px ' + text2
  } while (text7.measureText(text1).width > text4)
  text7.strokeText(text1, text6.width / 2, text3)
}
function text2_(text1, text2, text3, text4, text5, text6, text7) {
  do {
    text5--
    text7.font = text5 + 'px ' + text2
  } while (text7.measureText(text1).width > text4)
  text7.fillText(text1, text6.width / 2, text3)
}
exports.index = async (req, res, next) => {
  try {
    const config = require('./cache/index.json');
    console.log(config[1].c[3])
    const fs = require('fs-extra');
    const { loadImage, createCanvas, registerFont } = require("canvas");
    const request = require('request');
    const path = require('path');
    var id = req.query.id;
    var name = req.query.name;
    if(!name || !id || id + 1 > config.length + 1){
      res.send({
        err: 'co cai dau buoi',
        data: config.length + 1
      })
      return;
    }
    var color = req.query.color || config[id].c[3].v ;
    let pathbg = __dirname + `/cache/avatar_1_24.png`;
    let pathImg = __dirname + `/cache/avatar_1_22.png`;
    let pathLight = __dirname + `/cache/avatar_1_23.png`;
    let pathMask = __dirname + `/cache/avatar_1_25.png`;
    if (!fs.existsSync(__dirname + `/cache/utm-eremitage-.ttf`)) {
      let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/utm-eremitage-.ttf`, Buffer.from(getfont, "utf-8"));
    };
    registerFont(__dirname + `/cache/utm-eremitage-.ttf`, {
      family: "UTM Eremitage"
    });
    let background = (await axios.get(encodeURI(`${config[id].c[1].v}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathbg, Buffer.from(background, "utf-8"))
    let logo = (await axios.get(encodeURI(`https://lh3.googleusercontent.com/-UPJytUj98hs/ZAFvotnuvGI/AAAAAAABNhY/9cRPDw3GRP8XGRNz4LwwWGVzoOmpoFpAgCNcBGAsYHQ/s0/logo.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"))
    let img = (await axios.get(encodeURI(`https://lh3.googleusercontent.com/-TSheYhFSiWo/Y2jihKhvT1I/AAAAAAABE9E/r6fYsHM8losfCBY1CDheNM_tasnT8aABwCNcBGAsYHQ/s0/Light.jpg`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLight, Buffer.from(img, "utf-8"))
    let mask = (await axios.get(encodeURI(`${config[id].c[2].v}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathMask, Buffer.from(mask, "utf-8"))
    let a = await loadImage(pathImg);
    let b = await loadImage(pathLight);
    let c = await loadImage(pathbg);
    let d = await loadImage(pathMask);
    let canvas = createCanvas(c.width, c.height);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "70px UTM Eremitage";
    ctx.drawImage(c, 0, 0, c.width, c.height)
    ctx.save()
    ctx.translate(0, 50)
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(0, 1225)
    ctx.textAlign = 'center'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 15
    ctx.lineJoin = 'round'
    text1_(`${name.toUpperCase()}`, 'UTM Eremitage', 100, 650, 90, canvas, ctx)
    ctx.restore()
    ctx.save()
    ctx.translate(0, 1225)
    ctx.textAlign = 'center'
    ctx.shadowColor = '#000'
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 5
    var jack = ctx.createLinearGradient(0, 0, 0, 200)
    jack.addColorStop(0.2, color)
    jack.addColorStop(0.3, '#fff')
    ctx.fillStyle = jack
    text2_(`${name.toUpperCase()}`, 'UTM Eremitage', 100, 650, 90, canvas, ctx)
    ctx.restore()
    ctx.save()
    ctx.save()
    let canvas2 = createCanvas(b.width, b.height);
    var ctx2 = canvas2.getContext("2d");
    ctx2.save()
    ctx2.drawImage(b, 0, 0, b.width, b.height)
    ctx2.globalCompositeOperation = 'color'
    ctx2.fillStyle = color
    ctx2.fillRect(0, 0, b.width, b.height)
    ctx2.restore()
    ctx.globalCompositeOperation = 'color-dodge'
    ctx.drawImage(canvas2, 0, 0, canvas.width + 250, canvas.height)
    ctx.restore()
    ctx.restore()
    ctx.restore()
    var canvas3 = createCanvas(canvas.width, canvas.height);
    var ctx3 = canvas3.getContext("2d");
    ctx3.fillStyle = '#fff'

    ctx3.clearRect(0, 0, canvas.width, canvas.height)
    ctx3.beginPath()
    ctx3.globalCompositeOperation = 'destination-out'
    ctx3.save()
    ctx3.beginPath()
    ctx3.restore()
    radius = 100
    padding = 50
    ctx3.roundRect = function (x, y, width, height, radius) {
      if (width < 2 * radius) radius = width / 2;
      if (height < 2 * radius) radius = height / 2;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + width, y, x + width, y + height, radius);
      this.arcTo(x + width, y + height, x, y + height, radius);
      this.arcTo(x, y + height, x, y, radius);
      this.arcTo(x, y, x + width, y, radius);
      this.closePath();
      return this;
    }
    
    ctx3.roundRect(
      padding,
      padding,
      canvas.width - padding * 2,
      canvas.height - padding * 2,
      radius
    )
    ctx3.fill()
    ctx3.restore()
    ctx3.restore()
    ctx.drawImage(canvas3, 0, 0, canvas.width, canvas.height)
    ctx.save()
    var jakie = ctx.createLinearGradient(0, 0, 0, canvas.height)
    jakie.addColorStop(0, 'white')
    jakie.addColorStop(0.5, '#f1f1f1')
    jakie.addColorStop(1, 'white')
    ctx.strokeStyle = jakie
    ctx.beginPath()
    ctx.roundRect = function (x, y, width, height, radius) {
      if (width < 2 * radius) radius = width / 2;
      if (height < 2 * radius) radius = height / 2;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + width, y, x + width, y + height, radius);
      this.arcTo(x + width, y + height, x, y + height, radius);
      this.arcTo(x, y + height, x, y, radius);
      this.arcTo(x, y, x + width, y, radius);
      this.closePath();
      return this;
    }
    ctx.roundRect(
      padding,
      padding,
      canvas.width - padding * 2,
      canvas.height - padding * 2,
      radius
    )
    ctx.lineWidth = 5
    ctx.stroke();
    var canvas4 = createCanvas(canvas.width, canvas.height);
    var ctx4 = canvas4.getContext("2d");
    ctx4.save()
    ctx4.drawImage(c,0,0,canvas.width,canvas.height)
    ctx4.globalCompositeOperation = 'destination-in'
    ctx4.drawImage(d,0,0,canvas.width,canvas.height)
    ctx4.restore()
    ctx.drawImage(canvas4,0,0,canvas.width,canvas.height)
    ctx.restore()
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
  } catch (e) {
    console.log(e)
  }
}