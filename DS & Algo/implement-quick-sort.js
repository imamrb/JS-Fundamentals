/*
Algorithms: Implement Quick Sort

The key process in quickSort is partition().
 Target of partitions is, given an array and an element x of array as pivot, 
put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, 
and put all greater elements (greater than x) after x.
All this should be done in linear time.
*/
function partition(arr, left, right){
  let pivot = arr[right];
  let shift = left-1;
  for(let j=left; j<right; j++){
    if(arr[j]<pivot){
      shift++;
      [arr[shift], arr[j]] = [arr[j], arr[shift]];
    }
  }
  [arr[shift+1], arr[right]] = [arr[right], arr[shift+1]];
  return shift+1;
}

function quickSort(arr, left=0, right=arr.length-1) {
  
  if(left<right){
    /* pi is partitioning index, arr[p] is now  
        at right place */
    let pi = partition(arr, left, right);
    quickSort(arr, left, pi-1);
    quickSort(arr, pi+1, right);
  }
  return arr;
}

// test array:
const array = quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(array);
/*
Illustration of partition() :

arr[] = {10, 80, 30, 90, 40, 50, 70}
Indexes:  0   1   2   3   4   5   6 

low = 0, high =  6, pivot = arr[h] = 70
Initialize index of smaller element, i = -1

Traverse elements from j = low to high-1
j = 0 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 0 
arr[] = {10, 80, 30, 90, 40, 50, 70} // No change as i and j 
                                     // are same

j = 1 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 2 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 1
arr[] = {10, 30, 80, 90, 40, 50, 70} // We swap 80 and 30 

j = 3 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 4 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 2
arr[] = {10, 30, 40, 90, 80, 50, 70} // 80 and 40 Swapped
j = 5 : Since arr[j] <= pivot, do i++ and swap arr[i] with arr[j] 
i = 3 
arr[] = {10, 30, 40, 50, 80, 90, 70} // 90 and 50 Swapped 

We come out of loop because j is now equal to high-1.
Finally we place pivot at correct position by swapping
arr[i+1] and arr[high] (or pivot) 
arr[] = {10, 30, 40, 50, 70, 90, 80} // 80 and 70 Swapped 

Now 70 is at its correct place. All elements smaller than
70 are before it and all elements greater than 70 are after
it.
*/