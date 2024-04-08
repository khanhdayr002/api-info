exports.name = '/facebook/info';
const axios = require('axios')
function convert(time){
  var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + " || " + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
}
exports.index = async (req, res, next) => {
  const axios = require("axios");
/*axios.get(`https://graph.facebook.com/${req.query.uid}?fields=id,is_verified,created_time,cover,work,hometown,username,link,name,locale,location,website,birthday,gender,relationship_status,quotes,subscribers.limit(0)&access_token=EAAAAUaZA8jlABO9FDx2fPCtF8Prkl8O88VTLZA7Dh6hLiFtUARxaAfOiKbmafZBR1AVkRrDYgrGJHqXtOm79JGcLxVmHm3y54LusC3DMGtadZAZA7EXZAN1YpzhNHumktPKdRZCm0ILIlCIErKVvW4O1gaCxE9UdMChC3rrCwo10pJ3zdKwZBAlTTZAN1iqgWTfZBkkjQXytQLPQZDZD`,{*/
 axios.get(`https://graph.facebook.com/${req.query.uid}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=EAAAAUaZA8jlABO9FDx2fPCtF8Prkl8O88VTLZA7Dh6hLiFtUARxaAfOiKbmafZBR1AVkRrDYgrGJHqXtOm79JGcLxVmHm3y54LusC3DMGtadZAZA7EXZAN1YpzhNHumktPKdRZCm0ILIlCIErKVvW4O1gaCxE9UdMChC3rrCwo10pJ3zdKwZBAlTTZAN1iqgWTfZBkkjQXytQLPQZDZD`,{
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /"
        }
      }).then(resp => {
  
  var dj = {
    name: resp.data.name,
    link_profile: resp.data.link,
    uid: resp.data.id,
    first_name: resp.data.first_name,
    username: resp.data.username,
    created_time : convert(resp.data.created_time),
    web: resp.data.website || "Không có dữ liệu!",
    gender: resp.data.gender,
    relationship_status: resp.data.relationship_status || "Nó giấu rồi",
    love: resp.data.significant_other,
    birthday: resp.data.birthday || "Không công khai", 
    follower: resp.data.subscribers.summary.total_count || "Không công khai",
    tichxanh: resp.data.is_verified,
    avatar: `https://graph.facebook.com/${resp.data.id}/picture?width=1500&height=1500&access_token=2712477385668128%7Cb429aeb53369951d411e1cae8e810640`,
    quotes: resp.data.quotes || "Không có dữ liệu!",
    about: resp.data.about || "Không có dữ liệu!",
    locale: resp.data.locale,
    location: !!resp.data.location?resp.data.location.name:undefined,
    hometown: !!resp.data.hometown?resp.data.hometown.name:undefined,
    cover : !!resp.data.source?resp.data.source:undefined,
    work: resp.data.work,
    author: "It's HAKIRA"
  }
  res.json(dj)
}).catch(e =>{
  console.log(e)
})
}