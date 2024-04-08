exports.name = '/canvas/animev1';
const axios = require('axios')
const { loadImage, createCanvas, registerFont } = require("canvas");
const fs = require("fs-extra");
const request = require("request");
let pathImg1 = __dirname + `/tad/avatar_1_11.png`;
        let pathImg2 = __dirname + `/tad/avatar_1_21.png`;
        let pathImg = __dirname + `/tad/avatar_1.png`;
        let pathAva = __dirname + `/tad/avatar_2.png`;
        let pathLine = __dirname + `/tad/avatar_3.png`;
        let pathLine2 = __dirname + `/wall/avatar_34.png`;
        let pathLine3 = __dirname + `/wall/avatar_33.png`;
        let pathLine4 = __dirname + `/wall/avatar_31.png`;
        let pathLine5 = __dirname + `/wall/avatar_32.png`;
        let pathLine6 = __dirname + `/wall/avatar_33.png`;
        let pathLine7 = __dirname + `/wall/avatar_3s3.png`;
        let pathIcon = __dirname + `/tad/avatar_3ds23c12311.png`;
        let pathIconIG = __dirname + `/tad/sssss.png`;
        let pathIcongithub = __dirname + `/tad/owo.png`;
        let line = __dirname + `/tad/12341o.png`;
exports.index = async (req, res, next) => {
   const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
   let avtAnime = (
                        await axios.get(encodeURI(`${lengthchar[char].imgAnime}`), {
                            responseType: "arraybuffer"
                        }))
                    .data;
                let line = (await axios.get(encodeURI(
                        `https://1.bp.blogspot.com/-5SECGn_32Co/YQkQ-ZyDSPI/AAAAAAAAv1o/nZYKV0s_UPY41XlfWfNIX0HbVoRLhnlogCNcBGAsYHQ/s0/line.png`), {
                        responseType: "arraybuffer"
                    }))
                    .data;
                let background = (await axios.get(encodeURI(`https://i.imgur.com/j8FVO1W.jpg`), {
                        responseType: "arraybuffer"
                    }))
                    .data;
                fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
                fs.writeFileSync(pathLine, Buffer.from(line, "utf-8"));
                fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
                let amg = await loadImage(pathImg);
                let cmg = await loadImage(pathAva);
                let omg = await loadImage(pathLine);
                let canvas = createCanvas(amg.width, amg.height);
                let ctx = canvas.getContext("2d");
                ctx.fillStyle = "#ffffff"
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                ctx.fillStyle = color_
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                registerFont(__dirname + `/tad/SteelfishRg-Regular.otf`, {
                    family: "SteelfishRg-Regular"
                });
                ctx.font = `430px SteelfishRg-Regular`;
                ctx.textAlign = "center";
                ctx.fillStyle = "rgb(255 255 255 / 70%)"
                ctx.globalAlpha = 0.7
                ctx.fillText(tenchinh.toUpperCase(), canvas.width / 2, 1350)
                ctx.globalAlpha = 1
                ctx.strokeStyle = "white"
                ctx.lineWidth = 7
                ctx.textAlign = "center"
                ctx.strokeText(tenchinh.toUpperCase(), canvas.width / 2, 900)
                ctx.strokeText(tenchinh.toUpperCase(), canvas.width / 2, 1800)
                ctx.drawImage(cmg, 0, 0, 2000, 2000);
                ctx.drawImage(omg, 0, 0, canvas.width, canvas.height)
                registerFont(__dirname + `/tad/MTD William Letter.otf`, {
                    family: "MTD William Letter"
                });
                ctx.font = `300px MTD William Letter`;
                ctx.fillStyle = `#FFFFFF`
                ctx.textAlign = "center";
                ctx.fillText(subname, canvas.width / 2, 350);
                ctx.beginPath();
                ctx.beginPath();
                const imageBuffer = canvas.toBuffer();
                fs.writeFileSync(pathImg, imageBuffer);
}