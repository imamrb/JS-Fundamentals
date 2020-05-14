function nonMutatingSplice(cities) {
  // slice(startIndex, endIndex);
  cities = cities.slice(0, 3); 
  //[ 'Chicago', 'Delhi', 'Islamabad' ]
  return cities;
  // Only change code above this line

  //splice(startIndex, numberOfElementsToRemove);
  // cities.splice(3); //[ 'Chicago', 'Delhi', 'Islamabad' ]
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));