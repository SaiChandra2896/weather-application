const request = require('request');

const forecast = (latitude,longitude,callback) =>{
const url = 'https://api.darksky.net/forecast/41609600355879151ce9e9d95f3d72ea/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

request({url,json: true},(err,res) =>{
    if(err){
        callback('Unable to connect to server!',undefined);
    }
    else if(res.body.error){
        callback('Invalid location!!', undefined);
    }
    else{
        callback(undefined, res.body.daily.data[0].summary+' Its currently '+res.body.currently.temperature+' degrees out. There is a '+res.body.currently.precipProbability+'% chance of rain');
    }
});
}


module.exports = forecast;