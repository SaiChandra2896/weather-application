const geocode = require('./geocode');
const forecast = require('./forecast');

console.log(process.argv);
const address = process.argv[2];

geocode(address,(err,result) =>{
    if(err){
       return console.log(err);
    }
    forecast(result.latitude,result.longitude,(err,forecastresult) =>{
        if(err){
            return console.log(err);
        }
        console.log(result.location);
        console.log(forecastresult);
    });
 });