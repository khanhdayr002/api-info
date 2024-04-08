exports.name = '/sms/:type';
exports.index = async (req, res, next) => {
  try{
  var type = req.params.type,
    phone = req.query.phone;
  if(!phone || phone.length > 11 ) return res.status(400).jsonp({
    data: 'Co Con Cac'
  });
  var spam = require('./folder/ultis.js')
 const array = ['metavn','zalopay','myviettel','TV360','vion','fpt','fptplay','hasuki','popeys','f88']
  if(!array.includes(type)) return res.jsonp('sai type cmnr')
 ////
  if(type == 'metavn') var d = await spam.metavn(phone)
  if(type == 'vion') var d = await spam.vion(phone)
  if(type == 'myviettel') var d = await spam.myviettel(phone)
  if(type == 'TV360') var d = await spam.TV360(phone)
  if(type == 'zalopay') var d = await spam.zalopay(phone)
if(type == 'fpt') var d = await spam.fpt(phone)
  ////
return res.status(200).jsonp({
      data: 'Gui Thanh Cong OTP'
    })
} catch(e){
    return res.status(400).jsonp({
      data:'err'
    })
}}