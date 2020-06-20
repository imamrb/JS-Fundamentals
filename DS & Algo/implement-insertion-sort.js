/*
Algorithms: Implement Insertion Sort
 This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. Then it inspects the next element and 
swaps it backwards into the sorted array until it is in sorted position.
*/
function insertionSort(arr) {
  
  for(let i=1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = key;
  }
  console.log(arr);
  return arr;

}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
