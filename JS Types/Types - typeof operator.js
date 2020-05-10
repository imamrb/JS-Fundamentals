console.log(Number("0o32")); //26 !
console.log(Number("32"));  //32
console.log(Number("n/a")); //NaN
console.log(Number("My cats age")); //NaN

console.log(typeof NaN); //Number OOPS!
//NaN is actually a number, that is invalid Number

console.log(NaN === NaN); //false , only type in javascript that is not equal to itself 

//Number.isNaN doesn't coercsion, only tells nun if its actually a nun
var age = Number("My cats age"); //NaN
console.log(Number.isNaN(age)); //true
console.log(Number.isNaN("My cats age")); //false

