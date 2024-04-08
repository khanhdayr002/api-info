exports.name = '/canvas/fire';
const axios = require('axios')

exports.index = async (req, res, next) => {
  try {
   if(req.query.link == 1){
     var link = 'https://lh3.googleusercontent.com/-CljZpz10GMo/YnT35YW5UeI/AAAAAAAA7y4/CAzRQhXa76scolu2HCYehQ45BjgUiKS3ACNcBGAsYHQ/s0/ytb.jpg'
   } else {
     var link = 'https://lh3.googleusercontent.com/-gj26Tg96XaY/YnThA0_5ZhI/AAAAAAAA7yw/9u6z0fLcW_4nAwP2dtg9851OKDpMRnS5wCNcBGAsYHQ/s0/bg.jpg'
   }
    const fs = require('fs-extra');
    const path = require('path');
    const Canvas = require('canvas');
    let pathImg = __dirname + `/!cache/avatar_11.png`;
    let background = (await axios.get(encodeURI(link), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
 Canvas.registerFont(__dirname+"/!cache/Catamaran.ttf", {family: "Catamaran"});
  Canvas.registerFont(__dirname+"/!cache/Metropolis-Black.otf", {family: "Metropolis"});
    Canvas.registerFont(__dirname+"/!cache/UTM Alter Gothic.ttf", {family: "UTM Alter Gothic"});
    let l2 = await Canvas.loadImage(pathImg);
      let canvas = Canvas.createCanvas(l2.width, l2.height);
  let ctx = canvas.getContext("2d");
    ctx.drawImage(l2, 0,0, l2.width, l2.height)
    ctx.save();
    ctx.globalCompositeOperation = 'hue'
    ctx.fillStyle = req.query.color || "red"
    ctx.fillRect(0, 0, l2.width, l2.height)
    ctx.restore();
    ctx.textAlign = 'center'
    ctx.lineWidth = 3
    ctx.font = '180px Catamaran'
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'
    ctx.strokeText((req.query.name).toUpperCase(),l2.width / 2,l2.height / 2 + 51)
    ctx.restore()
    ctx.save()
    ctx.shadowColor = 'black'
    ctx.shadowBlur = 30
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    var t = (req.query.name).toUpperCase().split(''),
      l = ctx.measureText(t).width;
    for (i = 0; i < t.length; i++) {
    ctx.fillText(t[i], l2.width / 2 - l / 4 + i * 70,l2.height / 2 + 45)
}
    ctx.restore()
    ctx.save()
    ctx.shadowColor = 'black'
    ctx.shadowBlur = 15
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.font = '35px UTM Alter Gothic'
    ctx.fillText(
                (req.query.title).toUpperCase().split('').join(' '),
                l2.width / 2,
                l2.height / 2 + 120
              )
              ctx.restore()
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    res.set({ "Content-Type": "image/png" })
    res.send(canvas.toBuffer())
  } catch (e) { 
    console.log(e)
    res.jsonp({data: false}) }
}