const hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//change default path to __dirname to what we wanted or define paths for express config
const viewpath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials');
const publicpath = path.join(__dirname,'../public');

//setting view engine to handlebars
app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(partialspath);

app.use(express.static(publicpath));



const port = process.env.PORT || 8080;

app.get('',(req,res) =>{
   res.render('index',{
       title: 'Weather',
       name: 'Sai Chandra'
   });
});

app.get('/about',(req,res) =>{
    res.render('about',{
        title: 'Weather',
        name: 'Sai Chandra'
    });
});

app.get('/help',(req,res) =>{
    res.render('help',{
        title: 'Weather',
        name: 'Sai Chandra'
    });
});

app.get('/weather',(req,res) =>{
    geocode(req.query.address,(err,result) =>{
        if(err){
           return console.log(err);
        }
        forecast(result.latitude,result.longitude,(err,forecastresult) =>{
            if(err){
                return res.send({
                    error: 'Unable to fetch forecastdata'
                    
                });
            }
            res.send({
                address: req.query.address,
                forecast: forecastdata,
                location: result.location
        });
     });
});

app.get('*',(req,res) =>{
    res.send('error');
});

app.get('/help/*',(req,res) =>{
   res.render('error',{
       title: 'Help article not found',
       name: 'Sai Chandra'
   });
});

app.get('/about/*',(req,res) =>{
    res.render('error',{
        title: 'About article not found',
        name: 'Sai Chandra'
    });
});

app.get('/weather/*',(req,res) =>{
    res.render('error',{
        title: 'Weather article not found',
        name: 'Sai Chandra'
    });
});

app.listen(port,() =>{
    console.log('Server is up on port 8080');
});