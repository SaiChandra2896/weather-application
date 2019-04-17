const geocode = require('./geocode');
const forecast = require('./forecast');

geocode('hyderabad',(err,result) =>{
    console.log('error',err)
    console.log('result',result)
    forecast(result.latitude,result.longitude,(err,result) =>{
        console.log('Error',err);
        console.log('Result',result);
    });
 });