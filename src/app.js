const hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();

//change default path to __dirname to what we wanted or define paths for express config
const viewpath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials');
const publicpath = path.join(__dirname,'../public');

//setting view engine to handlebars
app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(partialspath)



const port = process.env.PORT || 8080;

app.get('',(req,res) =>{
    res.send('My weather Project');
});

app.get('/about',(req,res) =>{
    res.send('about page');
});

app.get('/help',(req,res) =>{
    res.send('help page');
});

app.get('/weather',(req,res) =>{
    res.send('route to handle weather');
});

app.get('*',(req,res) =>{
    res.send('error');
});

app.get('/help/*',(req,res) =>{
    res.send('error');
});

app.get('/about/*',(req,res) =>{
    res.send('error');
});

app.get('/weather/*',(req,res) =>{
    res.send('error');
});

app.listen(port,() =>{
    console.log('Server is up on port 8080');
});