/*Algorithms: Implement Bubble Sort */
function bubbleSort(arr) {
  // change code below this line
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[i]){
        [arr[j], arr[i]] = [arr[i], arr[j]]; //swap here
      }
    }
  }
  console.log(arr);
  return arr;
  // change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
