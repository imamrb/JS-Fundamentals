const https = require('https')

let  lat = 23.7104, lon = 90.4074;  //Dhaka, BD

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=daily&appid=a914e84824e3adbafcdfc73e8b8889e4`

const request =  https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)
        console.log('*********************************')
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body =  JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    //console.log('An error!', error)
})

request.end()