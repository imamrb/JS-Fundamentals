const doRocketLaunch = (weather) => {
  return new Promise((resolve, reject) => {
    setTimeout(function gettingWeatherData() {
      if (weather == "Good") resolve("Mission Success")
      else reject("Abort Mission")
    }, 2000)
  })
}

doRocketLaunch("Good")
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
