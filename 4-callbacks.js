/* const geocode = (address, callback) => {
    return setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(address, data)
    }, 2000)
}
function getData(address, data){
    console.log(address, ':\n' ,  data);
}
geocode('Philadelpia', getData) */

/*******calllback */
/* add(1, 2, sum)
function add(a, b, sum) {
    sum(a+b)
}
function sum(result) {
    console.log(result)
} */
/*****closure */
/* function mul(a, b) {
    return function mulCallback(c) {
      console.log(a * b * c)
    }
}
let x = mul(1, 2)


console.log(x)
x(5)
 */

/*****Callback again */

const doRocketLaunch = (weather, callbackResult) => {
    setTimeout(function checkingWeather() {
        if (weather == 'Good') callbackResult(undefined, 'Mission Success!')
        
        else callbackResult('Abort Mission', undefined)
    }, 2000)

    console.log('Checking weather....')
}
const callbackResult = (error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
}

doRocketLaunch('Good', callbackResult)
//doRocketLaunch('Bad', callbackResult)