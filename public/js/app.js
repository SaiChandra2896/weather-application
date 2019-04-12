console.log('client side javascript  is loaded')

const weatherform =  document.querySelector('form')
const searchelem = document.querySelector('input')
const messg1 = document.querySelector('#message1')
const messg2 = document.querySelector('#message2')

 weatherform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = searchelem.value
    
    messg1.textContent = 'Loading...'
    messg2.textContent = ''
    
    fetch('http://localhost:3000/weather?address='+location).then((res) =>{
        //fetch allows us to fetch data from API
        res.json().then((data) =>{
            if(data.error){
                messg1.textContent = data.error
                messg2.textContent = ''
            }
            else{
                // console.log(data.location)
                // console.log(data.forecast)
                messg1.textContent = data.location
                messg2.textContent = data.forecast
            }
            
        })
    })
})