/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Passed
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Passed
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Passed
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Passed
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr, newArr = []) {
  console.log(newArr);
  arr.forEach(item => {
    if(Array.isArray(item)) steamrollArray(item, newArr);
    else  newArr.push(item);
  });
  return newArr; 
}

steamrollArray([1, [2], [3, [[4]]]]);
