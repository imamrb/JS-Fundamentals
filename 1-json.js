const fs = require('fs')

const book = {
    name: 'Imam Hossain',
    year: 2014
}
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('./1-json.json', bookJSON);
// const bookData = JSON.parse(bookJSON);
// console.log(bookData); 
let dataJSON = fs.readFileSync('1-json.json').toString()
const user = JSON.parse(dataJSON);
user.year = 1996;

const userJSON  = JSON.stringify(user);
console.log(userJSON);
fs.writeFileSync('./1-json.json', userJSON);