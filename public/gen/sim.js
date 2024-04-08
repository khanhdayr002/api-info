exports.name = '/dinhgiasim';
const axios = require('axios')
exports.index = async (req, res, next) => {
  var q = req.query.q 
  if(!q) return
  var o = []
axios.get('https://sim.vn/api/valuation/index?sim=' + q).then(resp => {
 res.jsonp(resp.data)
})
}
//https://lichngaytot.com/Ajax/XemSDTtheophongthuyAjax
//dateOfBirth: 01-06-1992 phone: 0334819872