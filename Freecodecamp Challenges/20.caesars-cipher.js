/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ? 'N', 'B' ? 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR YBIR?") should decode to FREE LOVE?
Passed
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/
function rot13(str) {
 function calc(L){
   let ascii = L.charCodeAt() + 13;
   ascii = ascii > 90 ? (ascii%91)+65 : ascii; 
   return String.fromCharCode(ascii);
 }
 str = str.replace(/[A-Z]/g, L => calc(L));
 return str;
}
rot13("A Z N M");
