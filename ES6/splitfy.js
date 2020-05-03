/* Use the split method inside the splitify function to split str into an array of words. The function should return the array */
function splitify(str) {
  // Only change code below this line

  let newArr = str.split(/[\s,-.&%#@]/);
  console.log(newArr);

  return newArr;
  // Only change code above this line
}
splitify("Earth-is-our home");
splitify("This.is.a-sentence");

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");

function sentensify(str) {
  // Only change code below this line

  let newStr = str.split(/\W/).join(" ");
  console.log(newStr);

  return newStr; 
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");