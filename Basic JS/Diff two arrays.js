/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];

newArr = arr1.filter(elem => arr2.indexOf(elem)==-1).concat(
    arr2.filter(elem => arr1.indexOf(elem)===-1)
  );
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//outputs 4 

//another way
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}