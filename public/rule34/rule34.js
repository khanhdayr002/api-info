exports.name = '/xxx/rule34';
const axios = require('axios')
exports.index = async (req, res, next) => {
 var q = req.query.q;
  if(!q) return res.json({
    err: 404
  })
  const text = q.split(" ")
axios.get('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&pid=0&tags=' + text.join("_")).then(r => {
  var array = []
  for(let i= 1; i < 100; i++){
    array.push({
      data: r.data.split('sample_url="')[i].split('"')[0]
  });
  }
  return res.jsonp(array)
}).catch(e => {
  return res.jsonp({
    err: 'k0 kjem tkay ket qua'
  })
})
}