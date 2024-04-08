exports.name = '/c';
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
    registerFont(__dirname + `/tad/A-Space_Black_Italic_Demo.otf`, {
      family: "A-Space_Black"
    });
 let canvas = createCanvas(3920, 1080);
  let l1 = await loadImage(lengthchar[21].imgAnime);
  let ctx = canvas.getContext("2d");
  ctx.save();
  ctx.fillStyle = lengthchar[21].colorBg;
ctx.fillRect(0, 0, 3920, 1080);
    ctx.save();
ctx.globalAlpha = 0.2;
  ctx.drawImage(l1, -300,-230,1600,1600)
  ctx.drawImage(l1, 2650,-430,1600,1600)
  ctx.restore();
  ctx.shadowColor = "white";
ctx.shadowBlur = 250;
  ctx.fillStyle = "white";
  ctx.transform(1, 0, -4.25, 1, -3, 0)
  ctx.fillRect(2550, -150, 2350, 3080);
  ctx.restore();
  //ctx.drawImage(l1, 1250,-230,1450,1450)
  ctx.save();
  ctx.translate(1950,660);
ctx.rotate(-0.075*Math.PI);
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = "black";
  ctx.textAlign = 'center';
  ctx.font ='italic 650px A-Space_Black';
  ctx.lineWidth = 4
  ctx.strokeText('ZERO TWO', 0,0);
  //ctx.restore();
  
  ctx.restore();
  ctx.save();
  ctx.translate(1850,600);
ctx.rotate(-0.075*Math.PI);
  ctx.fillStyle = lengthchar[21].colorBg;
  ctx.textAlign = 'center';
  ctx.font ='450px A-Space_Black';
  ctx.fillText('ZERO TWO', 0,0);
  ctx.restore();
  ctx.drawImage(l1, 1250,-230,1450,1450)
  const imageBuffer = canvas.toBuffer();
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
}