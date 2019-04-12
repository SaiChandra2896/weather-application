//request darksky api to fetch data
const request = require('request')

 const forecast = (longitude,latitude,callback) => {
     const url = 'https://api.darksky.net/forecast/41609600355879151ce9e9d95f3d72ea/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    //used destructuring of object and short hand syntax
     request({ url,json: true},(err,{ body}) =>{
        if(err){
            callback('Unable to connect to Weather Service',undefined)
        }
        else if(body.error){
             callback('Unable to find Location',undefined)
        }
        else{
            callback(undefined,body.daily.data[0].summary+' Its currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain')
        }
     })
 }
 
 module.exports = forecast

 // const url = 'https://api.darksky.net/forecast/41609600355879151ce9e9d95f3d72ea/37.8267,-122.4233'

// request({url: url,json:true},(err,res) => {
//     if(err){
//        console.log('Unable to connect to server')
//     }
//     else if(res.body.error){
//        console.log('Unable to find Location!!')
//     }
//     else{
//         console.log(res.body.daily.data[0].summary+' Its currently '+res.body.currently.temperature+' degrees out. There is a '+res.body.currently.precipProbability+'% chance of rain')
//     }
 
// })