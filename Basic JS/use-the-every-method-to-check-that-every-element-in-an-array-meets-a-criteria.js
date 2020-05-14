function checkPositive(arr) {
  // return boolean value
  
  return arr.every( elem => elem>=0);

  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));

//output false