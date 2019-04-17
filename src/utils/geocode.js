const request = require('request');

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FpY2hhbmRyYSIsImEiOiJjanU2cGQ4NWkxNXB1M3lzN2xsZW9vaGJwIn0.HBvvSyWUeFR9tkY_lOemLQ';

   request({url, json: true},(err,res) =>{
       if(err){
           console.log('Unamble to connect to server',err)
       }
       else if(res.body.features.length === 0){
           console.log('Unable to fetch location')
       }
       else{
           //console.log(res)
           console.log('latitude:'+res.body.features[0].center[1])
           console.log('logitude:'+res.body.features[0].center[0])
       }
   })