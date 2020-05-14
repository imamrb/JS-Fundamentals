/*
Intermediate Algorithm Scripting: Spinal Tap CasePassed
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  console.log(newStr);
  newStr = newStr.split(/(?:_|\s)+/g).join("-").toLowerCase();

  console.log(newStr);

  return newStr;
}

spinalCase('thisIsSpinalTap');
 