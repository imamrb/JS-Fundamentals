var timeFormat = {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hour: '2-digit', minute: '2-digit'}
var dateFormat = {timeZone: "America/New_York", year: 'numeric', month: 'long', day: 'numeric' }

var date = new Date().toLocaleDateString('en-US', dateFormat);
let time = new Date().toLocaleTimeString('en-US', timeFormat);

console.log(time);
console.log(date);