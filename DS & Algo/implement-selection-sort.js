/* Algorithms: Implement Selection Sort */
function selectionSort(arr) {
  // change code below this line
  for(let i=0; i<arr.length; i++){
    let Min = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[Min]>arr[j]) Min = j;
    }
    [arr[i], arr[Min]] = [arr[Min], arr[i]];
  }
  console.log(arr);
  return arr;
  // change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
