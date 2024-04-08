exports.name = '/facebook/login';
const axios = require("axios")
const fs = require("fs-extra")
const totp = require("totp-generator")
const request = require('request-promise');
var random_ua = require('random-ua');
exports.index = async (req, resp, next) => {
   var headers = {}
  headers["authority"] = "mbasic.facebook.com"
  headers["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  headers["accept-language"] = "en-US,en;q=0.9"
  headers["content-type"] = "multipart/form-data;"
  headers["sec-fetch-dest"] = "document"
  headers["sec-fetch-mode"] = "navigate"
  headers["sec-fetch-site"] = "none"
  headers["sec-fetch-user"] = "?1"
  headers["upgrade-insecure-requests"] = "1"
  headers["user-agent"] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36'
  const res = await axios({
    url: 'https://m.facebook.com/login/?next&ref=dbl&fl&refid=8',
    method: 'GET',
    headers: headers
  })
  fs.writeFileSync('a.txt', res.data)
// console.log(res.data)
  var lsd = res.data.split('name="lsd" value="')[1].split('"')[0];
  var try_number = res.data.split('name="try_number" value="')[1].split('"')[0];
  var li = res.data.split('name="li" value="')[1].split('"')[0];
  var m_ts = res.data.split('name="m_ts" value="')[1].split('"')[0];
  var bi_xrwh = res.data.split('name="bi_xrwh" value="')[1].split('"')[0];

  var data = {
    email: 'tandung16xz@icloud.com',
    pass: 'tandungne15',
    lsd: lsd,
    try_number: try_number,
    m_ts: m_ts,
    unrecognized_tries: 0,
    bi_xrwh: 0
  }
  headers['cookie'] = res.headers["set-cookie"].join(";");
  const login = await axios({
    method: "POST",
    url: "https://m.facebook.com/login/device-based/login/async/?refsrc=deprecated&lwv=100",
    headers: headers,
    data: data
  })
  fs.writeFileSync('b.txt', login.data)
  var twofa = 'SPBPEH4BQD3JYG7M7U4LSI6YSM3Q3FL4'
  if (twofa != null && twofa != "" && twofa != undefined) {
    if (login['headers']['set-cookie'].join("").includes("checkpoint")) {
      headers['cookie'] = login['headers']['set-cookie'].join(";");
      headers["authority"] = "m.facebook.com";
      headers["accept"] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    }
   // console.log(login['headers']['set-cookie'].join(""))
    const twofactor = totp('SPBPEH4BQD3JYG7M7U4LSI6YSM3Q3FL4')
    // lay headers roi post lẹn link checkpoint
    // headers["authority"] = "mbasic.facebook.com"
    const tfa = await axios({
      method: "GET",
      url: 'https://m.facebook.com/checkpoint/?__req=4',
      headers: headers
    })
    fs.writeFileSync('c.txt', tfa.data)
    var jazoest = tfa.data.split('name="jazoest" value="')[1].split('"')[0];
    var fb_dtsg = tfa.data.split('name="fb_dtsg" value="')[1].split('"')[0];
    var nh = tfa.data.split('name="nh" value="')[1].split('"')[0];
    var log2fa = {
      fb_dtsg: fb_dtsg,
      jazoest: jazoest,
      codes_submitted: '0',
      'submit[Submit Code]': 'Submit Code',
      nh: nh,
      approvals_code: twofactor
    }

    headers['cookie'] = tfa['headers']['set-cookie'].join(";");
    console.log(log2fa)
    const dt = await axios({
      method: "POST",
      url: "https://m.facebook.com/login/checkpoint/",
      headers: headers,
      data: log2fa
    })
    headers['cookie'] = dt['headers']['set-cookie'].join(";");
    fs.writeFileSync('d.txt', dt.data)
    const dt2 = await axios({
      method: "POST",
      url: "https://m.facebook.com/login/checkpoint/",
      headers: headers,
      data: {
        fb_dtsg: fb_dtsg,
        jazoest: jazoest,
        'submit[Continue]': 'Continue',
        nh: nh,
        name_action_selected: 'save_device'
      }
    })
    //console.log(dt2)
    fs.writeFileSync('e.txt', dt2.data)
    headers['cookie'] = dt2['headers']['set-cookie'].join(";");
    const dt3 = await axios({
      method: "POST",
      url: "https://m.facebook.com/login/checkpoint/",
      headers: headers,
      data: {
        fb_dtsg: fb_dtsg,
        jazoest: jazoest,
        'submit[Continue]': 'Continue',
        nh: nh,
      }
    })
    //console.log(dt3)
    fs.writeFileSync('gl.txt', dt3.data)
    headers['cookie'] = dt3['headers']['set-cookie'].join(";");
    const dt4 = await axios({
      method: "POST",
      url: "https://m.facebook.com/login/checkpoint/",
      headers: headers,
      data: {
        fb_dtsg: fb_dtsg,
        jazoest: jazoest,
        'submit[This was me]': 'This was me',
        nh: nh,
      }
    })
    //console.log(dt4['headers']['set-cookie'])
    fs.writeFileSync('dt4.txt', dt4.data)
    //console.log(dt4)
    headers['cookie'] = dt4['headers']['set-cookie'].join(";");

    request.post({
      url: 'https://m.facebook.com/checkpoint/',
      headers: headers,
      form: {
        fb_dtsg: fb_dtsg,
        jazoest: jazoest,
        'submit[Continue]': 'Continue',
        nh: nh,
        name_action_selected: "dont_save"
      }
    }, function(err, httpResponse, body) {
if(err) console.log();
      const cookies = []
            const validItems = ["sb", "datr", "c_user", "xs"]
            httpResponse.headers['set-cookie'].forEach(data => {
                const cookieParts = data.split(";")[0].split("=")
                if (validItems.includes(cookieParts[0])) {
                    cookies.push(cookieParts.join("="))
                }
            })
            const appstate = []
            cookies.forEach(cookie => {
                appstate.push({
                    key: cookie.split("=")[0],
                    value: cookie.split("=")[1],
                    domain: "facebook.com",
                    path: "/"
                })
            })
      
      resp.jsonp({
        appstate,
        cookies
      })
    })

  } else {
    const cookies = []
            const validItems = ["sb", "datr", "c_user", "xs"]
            login.headers['set-cookie'].forEach(data => {
                const cookieParts = data.split(";")[0].split("=")
                if (validItems.includes(cookieParts[0])) {
                    cookies.push(cookieParts.join("="))
                }
            })
            const appstate = []
            cookies.forEach(cookie => {
                appstate.push({
                    key: cookie.split("=")[0],
                    value: cookie.split("=")[1],
                    domain: "facebook.com",
                    path: "/"
                })
            })
      resp.jsonp({
        appstate,
        cookies
      })
    }
}