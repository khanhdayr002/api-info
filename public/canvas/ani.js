exports.name = '/canvas/ani';
const axios = require('axios')
const { loadImage, createCanvas, registerFont } = require("canvas");
module.exports.wrapText = (ctx, text, maxWidth) => {
    return new Promise(resolve => {
        if (ctx.measureText(text).width < maxWidth) return resolve([text]);
        if (ctx.measureText('W').width > maxWidth) return resolve(null);
        const words = text.split(' ');
        const lines = [];
        let line = '';
        while (words.length > 0) {
            let split = false;
            while (ctx.measureText(words[0]).width >= maxWidth) {
                const temp = words[0];
                words[0] = temp.slice(0, -1);
                if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
                else {
                    split = true;
                    words.splice(1, 0, temp.slice(-1));
                }
            }
            if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
            else {
                lines.push(line.trim());
                line = '';
            }
            if (words.length === 0) lines.push(line.trim());
        }
        return resolve(lines);
    });
}
//https://drive.google.com/u/0/uc?id=1Z683mRvmqEDxSMrKzcU35SjAdwXnW7Um&export=download felix
//https://drive.google.com/u/0/uc?id=16dAZYfQxE40WTmQdLm0Fsipe9n9NTWth&export=download elaine
exports.index = async (req, res, next) => {
  const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
  registerFont(__dirname + `/tad/felix.otf`, {
      family: "felix"
    });
  registerFont(__dirname + `/tad/Aquawax-Pro-DemiBold-trial.ttf`, {
      family: "Aqua"
    });
  registerFont(__dirname + `/tad/ElaineSans-SemiBold.ttf`, {
      family: "ElaineSans"
    });
 let canvas = createCanvas(2920, 1080);
  let canvas1 = createCanvas(2920, 1080);
  let canvas2 = createCanvas(2920, 1080);
  let l1 = await loadImage(lengthchar[21].imgAnime);
  let ctx = canvas.getContext("2d");
  let ctx1 = canvas1.getContext("2d");
  let ctx2 = canvas2.getContext("2d");
   let canvas3 = createCanvas(1500, 1500);
    var ctx3 = canvas3.getContext("2d");
    ctx3.fillStyle = "#ffff"
    ctx3.fillRect(0, 0, 1500, 1500)
    ctx3.save();
    ctx3.globalAlpha = "0.3";
    ctx3.drawImage(l1, 0, 0, 1500, 1500);
    ctx3.restore();
    ctx3.save();
    ctx3.fillStyle = "#FFF"
    ctx3.globalCompositeOperation = "color";
    ctx3.fillRect(0, 0, 1500, 1500)
    ctx3.restore();
  ctx1.fillStyle = req.query.color || "white"
  ctx1.fillRect(0, 0, 2920, 1080)
  ctx1.transform(1, 0, -0.45, 1, -3, 0)
  ctx1.fillStyle = req.query.color || "red"
  ctx1.fillRect(0, 0, 1480, 1080);
  ctx2.transform(1, 0, -0.45, 1, -3, 0)
  ctx2.fillStyle = req.query.color || "white"
  ctx2.fillRect(1050, 0, 10, 1080);
  ctx2.fillRect(630, 0, 10, 1080);
  ctx.drawImage(canvas1, 0,0,2920,1080)
  ctx.drawImage(canvas3, 1950, -290,1500,1500)
  ctx.drawImage(l1, -220, -290,1500,1500)
  ctx.drawImage(canvas2, 0,0,2920,1080)
  ctx.fillStyle = "red"
  ctx.fillRect(1800,650, 2600, 10)
  ctx.font = "200px felix";
ctx.fillText(".", 1760, 663);
  ctx.font = "110px ElaineSans";
  ctx.textAlign = 'left';
  ctx.shadowColor = "#cfe2f3"
ctx.shadowOffsetX = '5';
ctx.shadowOffsetY = 0;
ctx.shadowBlur = '10';
  ctx.fillText("TAN DUNG NGUYEN", 1800, 570);
  ctx.font = "50px ElaineSans";
  ctx.fillText("Gamer // Students", 1850, 630);
  var a = await this.wrapText(ctx,"Cuoc Doi Don Gian Hieu Thi Hieu Khong Hieu Thi Thoi", 1030);
  ctx.fillText(a.join('\n'),1850, 730)
  const imageBuffer = canvas.toBuffer();
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
}