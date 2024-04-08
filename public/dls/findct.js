exports.name = '/dls/info';
const fs = require('fs-extra')
function cmToM(cm) {
  return cm / 100;
}
function convertPosition(position) {
  var p = position.toString();
  if (p == "GK") return "Thủ Môn";
  if (p == "CB") return "Hậu Vệ Tru Tâm";
  if (p == "LB") return "Hậu Vệ Trái";
  if (p == "RB") return "Hậu Vệ Phải";
  if (p == "DM") return "Tiền Vệ Trụ";
  if (p == "CM") return "Tiền Vệ Trung Tâm";
  if (p == "RM") return "Tiền Vệ Phải";
  if (p == "LM") return "Tiền Vệ Trái";
  if (p == "AM") return "Tiền Vệ Tấn Công";
  if (p == "LW") return "Tiền Đạo Lệch Trái";
  if (p == "RW") return "Tiền Đạo Lệch Phải";
  if (p == "SS") return "Tiền Đạo Hộ Công";
  if (p == "CF") return "Tiền Đạo Cắm";
  if (p == "LF") return "Tiền Đạo Trái";
  if (p == "RF") return "Tiền Đạo Phải";
}
//how to add . to number every 3 digits
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
exports.index = async (req, res, next) => {
  try{
 const file = require('./cache/dls.json')
  const q = req.query.q;
  const split = q.split(" ");
    if(split.length > 1){
      var filter = file.filter(index => (`${index["First Name"]} ${index["Last Name"]}`).toUpperCase() == q.toUpperCase())
    } else {
      var filter = file.filter(index => index["Last Name"].toUpperCase() == q.toUpperCase())
    }
  
  const info = filter[0];
 var infom = {}
  infom.name = `${info['First Name']} ${info["Last Name"]}`;
  infom.price = `${numberWithCommas(info["Price"])} gold`;
 infom.quocgia = info["Norway"];
  infom.Club = info["Club"];
  infom.Position = convertPosition(info["Position"]);
 infom.Foot = info['Foot'] == "L" ? "Chân Trái" : info['Foot'] == "R" ? "Chân Phải" : "2 Chân";
 infom.rating = info["Rating"];
 infom.height = cmToM(info["Height (cm)"]) + "m";
 infom.Speed = info["Speed"];
 infom.Acceleration = info["Acceleration"];
  infom.Stamina = info["Stamina"];
  infom.Strength = info["Strength"];
  infom.BallControl = info["Control"];
  infom.Tackling = info["Tackling"];
  infom.Passing = info["Passing"];
  infom.Tackling = info["Tackling"];
  infom.Handling = info["Handling (GK)"] || "0";
  infom.Reactions = info["Reactions (GK)"] || "0";
//  infom.img = `https://raw.githubusercontent.com/hakuOwO/DLS-Files/main/playerphotos/DLS23/${info["Player ID"]}.png`|| "Khong Co Anh"
return res.json(infom)

}catch(e){
    return res.jsonp({
      err: "Khong Kiem Dc Cau Thu"
    })
}}
