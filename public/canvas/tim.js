exports.name = '/canvas/tim';
const axios = require('axios')
const Canvas = require('canvas')
const fs = require('fs')
exports.index = async (req, res, next) => {
  function cs(names, number) {
  if (names.length >= number) {
    return names.substring(0, number)
  }
  repeat = Math.ceil(number / names.length)
  newString = ''
  for (i = 0; i < repeat; i++) {
    newString += names
  }
  return newString.substring(0, number)
}
  var string = req.query.name
    var heart = ''
         heart +=
          '         ' +
          cs(string, 8) +
          '            ' +
          cs(string, 9) +
          '\n'
        heart +=
          '      ' +
          cs(string, 12) +
          '       ' +
          cs(string, 15) +
          '\n'
        heart +=
          '    ' + cs(string, 17) + '   ' + cs(string, 18) + '\n'
        heart += '   ' + cs(string, 41) + '\n'
        heart += '  ' + cs(string, 44) + '\n'
        heart += ' ' + cs(string, 46) + '\n'
        heart += ' ' + cs(string, 46) + '\n'
        heart += cs(string, 47) + '\n'
        heart += cs(string, 47) + '\n'
        heart += cs(string, 46) + '\n'
        heart += cs(string, 45) + '\n'
        heart += ' ' + cs(string, 43) + '\n'
        heart += '  ' + cs(string, 41) + '\n'
        heart += '    ' + cs(string, 38) + '\n'
        heart += '      ' + cs(string, 34) + '\n'
        heart += '         ' + cs(string, 28) + '\n'
        heart += '            ' + cs(string, 22) + '\n'
        heart += '              ' + cs(string, 18) + '\n'
        heart += '                 ' + cs(string, 13) + '\n'
        heart += '                   ' + cs(string, 9) + '\n'
        heart += '                     ' + cs(string, 6) + '\n'
        heart += '                      ' + cs(string, 4) + '\n'
        heart += '                       ' + cs(string, 2) + '\n'
  Canvas.registerFont(__dirname+"/!cache/Anonymous.ttf", {family: "MonogramCenter-Regular"});
  let canvas = Canvas.createCanvas(2000, 1500);
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = req.query.color1 || "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = req.query.color2 || "black"
  ctx.font = '50px MonogramCenter-Regular'
  var text = heart,
  slipt = text.split('\n');
  for (var obx = 0; obx < slipt.length; obx++) {
  ctx.fillText(slipt[obx], 250, 300 + obx * 50)
}
  ctx.restore()
  const imageBuffer = canvas.toBuffer();
  res.set({ "Content-Type": "image/png" })
  res.send(canvas.toBuffer())
}