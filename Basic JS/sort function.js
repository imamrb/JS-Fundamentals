function alphabeticalOrder(arr) {
  // universally works
   arr.sort((a, b) => a===b? 0 : a>b ? 1 : -1); 
   console.log(arr);
   return arr; 

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

function sortArrayOfNumbers(numArr){

  numArr.sort((a, b) => a-b); //for number works fine 

  return numArr;

}
console.log(sortArrayOfNumbers([2, 3, 1, 2, 3, 4, 5, -1]));