/*
The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces
*/
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  
  let newTitle = title.split(/\W+/g).filter(elem => elem);

  return newTitle.join("-").toLowerCase();
}
// Only change code above this line
console.log(urlSlug("Javascript       is     awesome!   "));