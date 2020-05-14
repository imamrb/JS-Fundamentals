/*
JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"

TestCases:
palindrome("My age is 0, 0 si ega ym.") should return true.
Passed
palindrome("1 eye for of 1 eye.") should return false.
Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.
Passed
palindrome("five|\_/|four") should return false.
*/
function palindrome(str) {
  str = str.toLowerCase();
  
  str = str.match(/[a-z0-9]/g);
  let newStr = str.join("");
  str = str.reverse().join("");

  //reverse function reverse the orginal array
  
  return str ===  newStr; 

}

palindrome("not a palindrome");
