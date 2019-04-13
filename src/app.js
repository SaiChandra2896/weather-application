const path = require('path')
const express = require('express')
const hbs = require('hbs')//handlebars
const app = express()

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//change default path to __dirname to what we wanted or define paths for express config
 const publicpath = path.join(__dirname,'../public')
 const viewpath = path.join(__dirname,'../templates/views')
 const partialspath = path.join(__dirname,'../templates/partials')
 
//setup handlebars engine and views location
 app.set('view engine','hbs')
 app.set('views', viewpath)
 hbs.registerPartials(partialspath)
 
//app.use custumizes the server to serve up that folder which comes from express
//set up static directory to serve
app.use(express.static(publicpath))


app.get('',(req,res) =>{
   res.render('index',{
       title:'Weather',
       name: 'Sai Chandra'
   })
})

app.get('/about', (req,res) => {
   res.render('about',{
       title: 'About',
       name: 'Sai Chandra'
   })
})

app.get('/help', (req,res) =>{
   res.render('help',{
       title: 'Help',
       name: 'Sai chandra'
   })
})

//configure what the server should do when someone tries to get the specific url
// app.get('',(req,res) =>{
// //visit expressjs.com select apireference to know more about req and res
//    res.send('<h1>Weather</h1>')

// })

app.get('/weather',(req,res) => {

    if(!req.query.address){
       return res.send({
           error: 'Address required'
       })
    }

    geocode(req.query.address, (err,{ latitude,longitude,location } = {}) => {
        if(err){
         return res.send({
             error:'Unable to fetch location!!'
         })
        }
        //callback chaining
           forecast(longitude, latitude, (err, forecastdata) => {
             if(err){
               return res.send({
                   error: 'Unable to fetch forecastdata'
               })
             }
            // console.log(location)
            // console.log(forecastdata)
            res.send({
                address: req.query.address,
                forecast: forecastdata,
                location
            })
          })
    })
})

app.get('/help/*',(req,res) =>{
   res.render('error',{
       title: 'Help Article not found',
       name: 'Sai chandra'
   })
})

app.get('*',(req,res) =>{
  res.render('error',{
      title: 'Page Not Found',
      name: 'Sai Chandra'
  })
})


app.listen(3000,() =>{
    console.log('server is up on port 3000')
})