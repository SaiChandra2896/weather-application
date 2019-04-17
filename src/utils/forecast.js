const request = require('request');

const url = 'https://api.darksky.net/forecast/41609600355879151ce9e9d95f3d72ea/37.8267,-122.4233';

request({url,json: true},(err,res) =>{
    if(err){
        console.log('Unable to connect to server!!',err)
    }
    else if(res.body.error){
        console.log('Invalid Location!')
    }
    else{
        console.log('Success!!', res)
    }
})