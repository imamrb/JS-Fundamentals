const request = require('request')
const got = require('got')
const fetch = require('node-fetch');
//Dhaka, BD
let lat = 23.7104, lon = 90.4074;  //Dhaka, BD

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=daily,minutely,hourly&appid=a914e84824e3adbafcdfc73e8b8889e4`


    // request({url, json: true}, (error, response) => {
    // 	console.log('error:', error);
    // 	console.log('statusCode:', response && response.statusCode);
    // 	console.log('body:', response.body);
    // });

/* (async () => {

    try {
        const response = got('http://api.openweathermap.org/data/2.5/onecall?lat=23.71&lon=90.40&units=metric&exclude=minutely,hourly,daily&appid=a914e84824e3adbafcdfc73e8b8889e4').json();
        console.log('statusCode:', response.statusCode);
        console.log('body:', response);
    } catch (error) {
        console.log('error:', error);
    }
})(); */  //didin't work

//node-fetch
/* fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
 */

const axios = require('axios');

// Make a request for a user with a given ID
axios.get(url)
    .then(function (response) {
    // handle success
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })