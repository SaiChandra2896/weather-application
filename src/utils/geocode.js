//request mapbox api for geocoding
const request = require('request')
//encodeURI encodes charectors like '?=+'
const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FpY2hhbmRyYSIsImEiOiJjanU2cGQ4NWkxNXB1M3lzN2xsZW9vaGJwIn0.HBvvSyWUeFR9tkY_lOemLQ&limit=1'
    //used destructuring of object and shorthand syntax
    request({ url,json: true},(err,{body}) =>{
       if(err){
           callback('Unable to connect to location services!',undefined)
       }
       else if(body.features.length === 0){
           callback('Unable to find Location. Try New Location',undefined)
       }
       else{
           callback(undefined,{
               latitude: body.features[0].center[1],
               longitude: body.features[0].center[0],
               location: body.features[0].place_name
           })
       }
    })
  }

  module.exports = geocode

  // const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FpY2hhbmRyYSIsImEiOiJjanU2cGQ4NWkxNXB1M3lzN2xsZW9vaGJwIn0.HBvvSyWUeFR9tkY_lOemLQ&limit=1'
// request({url: geourl, json: true},(err,res) => {
//     if(err){
//         console.log('Unable to connect to Location server')
//     }
//     else if(res.body.features.length === 0){
//         console.log('Unable to find Location')
//     }
//     else{
//         console.log('latitude: '+res.body.features[0].center[1])
//         console.log('logitude: '+res.body.features[0].center[0])
//     }
  
// })
