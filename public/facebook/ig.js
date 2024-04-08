exports.name = '/ig/info';
const axios = require('axios')
var data = 'bWlkPVl1dF9Ud0FMQUFIeFZPdmVCVHBzS3kzWXl5cFA7IGlnX2RpZD0yNDBDRTcyRS1GOTAzLTQ4OTgtOEMwNi03QjE2OTg5MzZBRDg7IGlnX25yY2I9MTsgZmJtXzEyNDAyNDU3NDI4NzQxND1iYXNlX2RvbWFpbj0uaW5zdGFncmFtLmNvbTsgZGF0cj1ZSF9yWXJVLVp2U0p2SkdPaVRXM21lRGk7IGNzcmZ0b2tlbj1pRThaREJkS2JnU1dwbkdZR1JCQmhIamNLd3lxcHFPTTsgZHNfdXNlcl9pZD0xOTQ0NjQ3MTk4OTsgc2hiaWQ9IjEwMjk0XDA1NDE5NDQ2NDcxOTg5XDA1NDE3MDI4MDg5NzE6MDFmNzUwZTRmOGRiOWM4NDBkNzk3ZTU3NmExMTZkZWJkNjcxZTQ1NmFhZGE3YWI2MTU5NDQ4NTc2NGRiNTlhYTNmMDYzOTUyIjsgc2hidHM9IjE2NzEyNzI5NzFcMDU0MTk0NDY0NzE5ODlcMDU0MTcwMjgwODk3MTowMWY3ZTQ5NjJjMThjM2EzZWI0MzMxZjAxOWVhMjYyMDkxZTJkZDgyODQ1YmJiODNlMTEzZGU2MjQ5ZWQ0NWE5YWNiMTkzMTgiOyBzZXNzaW9uaWQ9MTk0NDY0NzE5ODklM0FmNmgzWWF3YmVRSU1hMyUzQTIlM0FBWWRGcHdHdG5USjNJcm1oVlZEU3NYWUdxeFZZNVhiVmRxOElMdzlCOWc7IGZic3JfMTI0MDI0NTc0Mjg3NDE0PVQtaVdOdU9MZWNrUVlLOTZBMTFoRnpEd1RYYVlnS2FjVzVDdlZWYmJ6LVUuZXlKMWMyVnlYMmxrSWpvaU1UQXdNRFV4TmpNNE1UQXhOemt4SWl3aVkyOWtaU0k2SWtGUlJHaHJlSGxUZW1sNFdXdEdXVWczUXpGNlpuZElNV3d4YUdRNE1IaEZYMlJ3WDFscllXMHlkVkY0VGxwd09HMHpVMmxTVURnM05Hd3dURWhKYUhGRVRXbFRjRVUzUnpBNFp6RmtNRzVrWVZCUlVrTlNia2hFYTFWWlUwWlBkV2hEU0ZsbFoxWTBTblZwYzJOMVJXWlZNVVZRZGxsUWVEQk5ZMFo2VVhkVWVVdHliRlYxUjFGaFlWSkZXbFZ3WjFOdlpUTnZXR2hyUVhKSWMxbEpNa2h3TmxSc2RsVkVZeTAzYlhKb2NFVXRjRVp0VDIxSGNqQjBOMDFTV0Y5dWJuQXdVMlI1WVdKU05sbElkSEZRUzFkdGNrdGhOMGx4UldveldYTkJSbGhpYlRKck5UUjJkWFZFZUhkR01tSTRWRXBFWlZaMkxWQkNVMWxVZFhwNlgxOVVSbU5FVldOb2R6aG1RV1ZxTWxkbFJGOXZNSGN0YkdSbFQwVnRhalp3VG5rMFdtMTVjRVF0T1RSWWRFSkNPV3R3TFdwa2NsOUphVEJGVXpKSGFWVnpZa1JLTjNWaU5HWkxMVXcwUVZWalNHdDVPSFI0V0dkSElpd2liMkYxZEdoZmRHOXJaVzRpT2lKRlFVRkNkM3BNYVhodWFsbENRVU5hUTBobU0wYzNaa1p2T1doNVlrOU9VRzVqVDFZeE5tMXZUM0JsV2tOS00zbFNSamxvYm5GRFZqUlpNa0ZhUTNWYVEwOWFRWEZqUkZkU2FWTkNNM1pDYzFwRGJHTk1Xa055WVV0elZreEtia3cyY1ZKVGExazVWRlJhUWxwRFpqRnpWMFJ3Y1dSeFQwUjNlbHBDWldnNVZVNHlOR3hvWmpWR2JtUnlaSE5yYUV0Vk9HdEdXVGhxY1UwNE9FOVZUMVZMY2xWeU56bEVXa0pRVjFwRFdrRjJjRk5IVTNjMVQwWjZiM0J2Vlc1NVNrWm5OVGR1V2tKdlZqVkliM1owVWtGa2JsbE1jSGRhUkZwRUlpd2lZV3huYjNKcGRHaHRJam9pU0UxQlF5MVRTRUV5TlRZaUxDSnBjM04xWldSZllYUWlPakUyTnpFeU56WTRNRGw5OyBydXI9IkVBR1wwNTQxOTQ0NjQ3MTk4OVwwNTQxNzAyODEyODM0OjAxZjcwYjQ0YzI5NTIzMzNmMDIwYmEzYTE1NTBhMTNmMDE3ZmQ4NzEyNzg3YzBhN2Y3ZjNmYTYxMWQ4M2RhNWE4OTNiODNjMCI=';
let buff = new Buffer(data, 'base64');
let cookie = buff.toString('ascii');
exports.index = async (req, res, next) => {
 const json = (await require('axios').get(`https://www.instagram.com/${req.query.username}/?__a=1&__d=dis`, {
        headers: {
          cookie: cookie
        }
      })).data.graphql.user
  res.jsonp({
          username: json.username,
          fullname: json.full_name,
          private: json.is_private ? "Yes" : "No",
          id: json.id,
          followers: json.edge_followed_by.count,
          following: json.edge_follow.count,
          post_cout: json.edge_owner_to_timeline_media.count,
          website: json.external_url ? json.external_url : "No",
          bio: json.biography,
          picture: json.profile_pic_url_hd
        })
}