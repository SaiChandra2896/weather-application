const express = require('express');
const app = express();

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