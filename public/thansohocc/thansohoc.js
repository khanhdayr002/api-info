exports.name = '/generation/thansohoc';
const axios = require('axios')
const fs = require('fs-extra')
const { join } = require('path')
exports.index = async (req, res, next) => {
  const pathData = join(__dirname, "ultis" ,"data.json");
var dataJson = JSON.parse(fs.readFileSync(pathData, "utf-8"));
  const { name, birthday } = req.query;
  if(!name || !birthday){
    return res.jsonp({
      err: "Thieu Ten Hoac Ngay Sinh"
    })
  }
  if(!birthday.includes('/')){
     return res.jsonp({
      err: "khong hop le"
    })
  }
  const { calculate } = require('./ultis/function')
  var day = birthday.split('/')
  var d = calculate(day[0],day[1],day[2],name)
  
  var JSONDATA = {
    bhdd: {
      scd: d.bhdd,
      data: dataJson['bhdd'][`${d.bhdd}`]
  },
    nltn: {
      scd: d.nltn,
      data: dataJson['nltn'][`${d.nltn}`]
  },
    dlbt:{ 
      scd: d.dlbt,
      data: dataJson['dlbt'][`${d.dlbt}`]
    },
    ncbt:{
      scd: d.nc,
      data: dataJson['ncbn'][`${d.nc}`]
  },
    name: name,
    ngaysinh: birthday,
    author: {
      name: 'HAKIRAVN'
    }
  }
  res.status(200).json({
    response: JSONDATA
  })
}