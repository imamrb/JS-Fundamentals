var emptyArr1 = [2];
var emptyArr2 = [2];
console.log(emptyArr1==emptyArr2); //false
//here though they are both the same array, it doesn't work. Because JS treats array as an object. Though they have same contents but they are two diffrent objects, that's why they are not same

//but they are same when they both are same objects
emptyArr2 = emptyArr1; // [2]
console.log(emptyArr2 == emptyArr1); //true

let arr1 = [2,3,4];
let arr2 = [2,3,4];
console.log(String(arr1)==String(arr2)); //true
//now it works even for null arrays