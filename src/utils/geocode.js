const request = require('request');

const geocode = (address,callback) =>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FpY2hhbmRyYSIsImEiOiJjanU2cGQ4NWkxNXB1M3lzN2xsZW9vaGJwIn0.HBvvSyWUeFR9tkY_lOemLQ';

   request({url, json: true},(err,res) =>{
       if(err){
           callback('Unable to connect to server!',undefined);
       }
       else if(res.body.features.length === 0){
           //console.log('Unable to fetch location');
           callback('Unable to fetch location. Try New Location',undefined);
       }
       else{
           //console.log(res)
          callback(undefined,{
              latitude: res.body.features[0].center[1],
              longitude: res.body.features[0].center[0],
              location: res.body.features[0].place_name
          });
       }
   });
}

geocode('hyderabad',(err,result) =>{
   console.log('error',err)
   console.log('result',result)
});
