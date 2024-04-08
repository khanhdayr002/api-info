const fs = require('fs');
const path = require('path');
exports.name = '/fbcover/demo';

exports.index = async (req, res, next) => {
  try {
    module.exports.circle = async (image) => {
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
    let pathkhung = __dirname + `/!cache/su1mi.png`;
    let pathAva_1 = __dirname + `/!cache/sumi2.png`;
    let pathAva_2 = __dirname + `/!cache/sumi22.png`;
    let bg1 = (await axios.get(encodeURI(`https://imgur.com/HQqwtSC.jpg`), {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(pathkhung, Buffer.from(bg1, 'utf-8'));
    let bg = (await axios.get(encodeURI(`https://imgur.com/mw0M8Kx.jpg`), {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(pathImg, Buffer.from(bg, 'utf-8'));
    let av1 = (await axios.get(encodeURI(`https://scontent.fvca1-3.fna.fbcdn.net/v/t1.6435-1/79515135_10111007623880301_5111576226921709568_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=F4cF0nNQVYcAX_deuR-&_nc_ht=scontent.fvca1-3.fna&oh=00_AT90BGl7SI-mYcc-nZlq00ed7uustBfHaASotSPVTFeBTQ&oe=63490A66`), {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(pathAva_1, Buffer.from(av1, 'utf-8'));
     let av2 = (await axios.get(encodeURI(`https://scontent.fvca1-3.fna.fbcdn.net/v/t1.6435-1/79515135_10111007623880301_5111576226921709568_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=F4cF0nNQVYcAX_deuR-&_nc_ht=scontent.fvca1-3.fna&oh=00_AT90BGl7SI-mYcc-nZlq00ed7uustBfHaASotSPVTFeBTQ&oe=63490A66`), {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(pathAva_2, Buffer.from(av2, 'utf-8'));
    var avatar1 = await this.circle(pathAva_1);
    var avatar2 = await this.circle(pathAva_2);
    let baseImage = await loadImage(pathImg);
    let a1 = await loadImage(avatar1);
    let a2 = await loadImage(avatar2);
    let k = await loadImage(pathkhung);
    let c = await loadImage('https://imgur.com/HRluWYj.png')
    let g = await loadImage('https://imgur.com/NpsCB9G.png')
    let t = await loadImage('https://imgur.com/nz8cXcn.png')
    let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(a1, canvas.width / 2 - 620, canvas.height / 2 - 300, 350, 350);
    ctx.drawImage(a2, canvas.width / 2 + 300, canvas.height / 2 - 300, 350, 350);
  ctx.drawImage(k, canvas.width / 2 - 650, canvas.height / 2 - 325, 400, 400);
    ctx.drawImage(k, canvas.width / 2 + 255, canvas.height / 2 - 325, 400, 400);
    ctx.drawImage(c, canvas.width / 2 - 240, canvas.height / 2 - 350, 500, 500);
    //ctx.drawImage(g, canvas.width / 2 - 490 , canvas.height / 2 + 300, 1000, 200);
    ctx.save()
    registerFont(__dirname + `/!cache/UTM Alter Gothic.ttf`, {
      family: "GMV DIN Pro Cond"
    });
    ctx.font = `75px GMV DIN Pro Cond`;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 13;
     ctx.fillStyle = "#fff";
      ctx.textAlign = 'center';
      ctx.fillText("ERIKADEVELOPER", canvas.width / 2 - 450, canvas.height / 2 + 140);
    ctx.fillText("ERIKADEVELOPER", canvas.width / 2 + 470, canvas.height / 2 + 140);
    ctx.save()
    //ctx.fillText("00:00:00|DD/MM/YYYY", canvas.width / 2 + 30, canvas.height / 2 + 430);
    ctx.fillText("00:00:00|DD/MM/YYYY", canvas.width / 2 + 30, canvas.height / 2 - 370);
    ctx.drawImage(t, canvas.width / 2 - 520, canvas.height / 2 + 200, 250, 200);
    ctx.drawImage(t, canvas.width / 2 - 320, canvas.height / 2 + 200, 250, 200);
    ctx.drawImage(t, canvas.width / 2 - 100, canvas.height / 2 + 200, 250, 200);
    ctx.drawImage(t, canvas.width / 2 + 120, canvas.height / 2 + 200, 250, 200);
    ctx.drawImage(t, canvas.width / 2 + 320, canvas.height / 2 + 200, 250, 200);
    ctx.font = `50px GMV DIN Pro Cond`;
    ctx.textAlign = 'start';
    ctx.fillText("0", canvas.width / 2 - 405, canvas.height / 2 + 310);
    ctx.fillText("0", canvas.width / 2 - 205, canvas.height / 2 + 310);
    ctx.fillText("0", canvas.width / 2 + 15, canvas.height / 2 + 310);
    ctx.fillText("0", canvas.width / 2 + 235, canvas.height / 2 + 310);
    ctx.fillText("0", canvas.width / 2 + 435, canvas.height / 2 + 310);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    return res.sendFile(pathImg);
  } catch (e) {
    console.log(e)
  }
}