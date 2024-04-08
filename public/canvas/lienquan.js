exports.name = '/canvas/lienquan';
const axios = require('axios')
exports.index = async (req, res, next) => {
    try {
    const fs = require('fs-extra');
    const { loadImage, createCanvas } = require("canvas");
    const request = require('request');
    const path = require('path');
    var id = req.query.id;
    var name = req.query.name;
    if(name == "" || !name){
      var name = ""
    }
    if (id < 1 || id > 422 || !id ) return res.jsonp({ error: 'Không tìm thấy ID nhân vật' });
    const Canvas = require('canvas');
     var avtAnimee = (await axios.get(`https://run.mocky.io/v3/2ba3f7f9-65af-417f-b751-8a3e22211217`)).data
    let pathImg = __dirname + `/tad/avatar_1_22.png`;
    let pathAva = __dirname + `/tad/avatar_1_23.png`;
    let pathbg = __dirname + `/tad/avatar_1_24.png`;
    let background = (await axios.get(encodeURI(`https://lh3.googleusercontent.com/-yf4MQhVwyP0/YYTsGKx9EdI/AAAAAAAAzQg/MpDwDvx1XlsvaJf1CVyb_t4iW12eS7b-ACNcBGAsYHQ/s0/l1.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let line = (await axios.get(encodeURI(`https://lh3.googleusercontent.com/-g1vNmzjD6rw/YYTvcwQGVUI/AAAAAAAAzQw/3HaJt0bAtL8lACqJjjWW-raGQA3lO5yfwCNcBGAsYHQ/s0/l2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathbg, Buffer.from(line, "utf-8"));
    let ava = (await axios.get(encodeURI(`${avtAnimee[id - 1].LQcover}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    if (!fs.existsSync(__dirname +
      `/tad/UTM Gods Word.ttf`)) {
      let getfont = (await axios.get(`https://github.com/tdunguwu/font/blob/main/UTM%20God's%20WordR.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/UTM Gods Word.ttf`, Buffer.from(getfont, "utf-8"));
    };
    let a = await loadImage(pathAva);
    let b = await loadImage(pathImg);
    let l2 = await loadImage(pathbg);
    let canvas = createCanvas(l2.width, l2.height);
    var ctx = canvas.getContext("2d");
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save();
    ctx.filter = "blur(20px)"

    ctx.drawImage(a, canvas.width / 2 - 3033 / 2 - 50 / 2, 0 - 50 / 2, 3033 + 50, canvas.height + 50);
    ctx.restore();
    ctx.save();
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.drawImage(a, 0, canvas.height / 2 - 741 / 2, canvas.width, 741);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "overlay";
    ctx.drawImage(b, 0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore();
    ctx.drawImage(l2, 0, 0, canvas.width, canvas.height);
    ctx.save();
    Canvas.registerFont(__dirname + `/tad/UTM Gods Word.ttf`, {
      family: "SVN-Revolution"
    });
    ctx.textAlign = "center";
    ctx.font = "70px UTM Gods Word";
    var jack = ctx.createLinearGradient(0, 0, 0, 1000);
    jack.addColorStop(0, "#fff");
    jack.addColorStop(0.55, "#fff");
    jack.addColorStop(0.65, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = jack
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 15;
    ctx.fillText(name, canvas.width / 2 - 10, 590);
    ctx.restore();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
  } catch (e) {
    console.log(e)
  }
}