//request mapbox api for geocoding
const request = require('request')
//encodeURI encodes charectors like '?=+'
const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2FpY2hhbmRyYSIsImEiOiJjanU2cGQ4NWkxNXB1M3lzN2xsZW9vaGJwIn0.HBvvSyWUeFR9tkY_lOemLQ&limit=1'
    //used destructuring of object and shorthand syntax
    request({ url,json: true,rejectUnauthorized: false},(err,{body} = {}) =>{
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