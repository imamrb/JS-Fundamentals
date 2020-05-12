
console.log([1,2,3].toString());
console.log(Number("123.23")); 
console.log(Number.parseInt("123.23kjslk")); //ignores the last string part but must need to start with number
console.log(Number("-0")); //0
Number(""); //0
Number(null); //0
Number(undefined); //NaN
Number([]); //0
Number({}); //NaN



console.log(Boolean(null)); //false
Boolean(undefined); //false
Boolean({}); //true

//Boxing
var num = "String";
console.log(num.length);
//getting legthn of a primitive type string, here string is acting like an object which has property length. Actually here implicit coercion happening, which converts primitive string to it's object counterpart. It's called Boxing.



