/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Test Cases: 
convertToRoman(29) should return "XXIX".
Passed
convertToRoman(44) should return "XLIV".
Passed
convertToRoman(45) should return "XLV"
Passed
convertToRoman(68) should return "LXVIII"
Passed
convertToRoman(83) should return "LXXXIII"
Passed
convertToRoman(97) should return "XCVII"
Passed
convertToRoman(99) should return "XCIX"
convertToRoman(2014) should return "MMXIV"
Passed
convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {
 let romanMap = {
    1: "I",
    4: "IV",
    5: "V", 
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD", 
    500: "D", 
    900: "CM",
    1000: "M"
 }
 let arr = Object.keys(romanMap);
 let n = arr.length - 1; 
 let result = "";
 while(num>0){
   let val = Number.parseInt(arr[n]);
   let div = ~~(num / val);  // ~~
   num = num % val; 
   console.log(val, div);
   while(div>0){
     result = result + romanMap[arr[n]];
     --div;
   }
   --n;
 }
 return result;
}
console.log(convertToRoman(29));
