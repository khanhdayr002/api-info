exports.name = '/dls/info/clb'
exports.index = async (req, res, next) => {
  try{
  const file = require('./cache/dls.json')
  const q = req.query.q;
  var filter = file.filter(index => index["Club"] == q)
  
 return res.jsonp(filter)
} catch(e){
    return res.json({
      err: "sai lenh"
    })
}
}