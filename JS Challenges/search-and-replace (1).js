/*
Intermediate Algorithm Scripting: Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  //matching the first character case
  if(before[0]===before[0].toUpperCase()){
    after = after[0].toUpperCase()+after.slice(1,);
    console.log(after);
  }
  else after = after[0].toLowerCase()+after.slice(1,);
  
  let arr = str.split(" ");
  //replace the word before at its index with after
  let index = arr.indexOf(before);
  arr.splice(index, 1, after);

  let newStr = arr.join(" ");
  console.log(newStr);
  return newStr;
}
myReplace1("A quick brown fox jumped jumped over the lazy dog", "jumped", "leaped");

//Soultion 2
function myReplace2(str, before, after) {
  if(/^[A-Z]/.test(before)){
    after = after[0].toUpperCase()+after.slice(1,);
  }
  else after = after[0].toLowerCase()+after.slice(1,);
  
  let newStr = str.replace(before, after);
   //only replaces the first match
  console.log(newStr);
  return newStr;
}
myReplace2("A quick brown fox jumped jumped over the lazy dog", "jumped", "leaped");
