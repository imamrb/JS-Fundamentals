function nonMutatingConcat(original, attach) {
  // Only change code below this line
  let newArr = original.concat(attach);
  return newArr;
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));