/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let regex = /^[aeiou]/;
  
  if(regex.test(str)===true){
   return str.concat("way");
  }
  else{
      regex = /^[^aeiou]+/;
      let newStr = str.match(regex)[0];
      
      newStr = str.slice(newStr.length) + newStr + "ay";
      console.log(newStr);
      return newStr;
  }
}

translatePigLatin("dkdksonant");
