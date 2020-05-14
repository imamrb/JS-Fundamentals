
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  
  let newTitle = title.split(/\W+/g).filter(elem => elem);

  return newTitle.join("-").toLowerCase();
}
// Only change code above this line
console.log(urlSlug("Javascript       is     awesome!   "));