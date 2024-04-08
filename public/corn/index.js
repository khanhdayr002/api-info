exports.name = '/cronjob';
const fs = require('fs-extra'),
  {join} = require('path');
exports.index = async (req, res, next) => {
  var { link1 } = req.query;
  if(!link1) return res.status(400).json({ data: 'err'});
   const pathData = join(__dirname, "cronjob" , "index.json");
var dataJson = JSON.parse(fs.readFileSync(pathData, "utf-8"));
  var link = dataJson.find(i => i == link1);
  if (!dataJson.some(i => i == link1)) {
    dataJson.push(link1);
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
    res.status(200).json({data: 'Thanh Cong'})
  } else {
    res.status(400).json({data: 'That Bai Mat Roi'})
  }
}