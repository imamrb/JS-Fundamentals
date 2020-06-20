/*
Algorithms: No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
  let arr = str.split("");

  let result = [];
  function permute(arr, l, r){
      if(l==r){
        result.push(arr.join(""));
      }
      else{
        for(let i=l; i<=r; i++){
            [arr[i], arr[l]] = [arr[l], arr[i]]; //swap position
            permute(arr, l+1, r); //recursive call

            [arr[i], arr[l]] = [arr[l], arr[i]]; //swap back
        }
      }
  };
  permute(arr, 0, arr.length-1);
  
  let regex = /(.)\1+/; //matches the same text as most recently matched by the 1st capturing group

  result = result.filter(item => !regex.test(item));
 
  return result.length;
}

permAlone('a');

/*
permAlone("aab") should return a number.
Passed
permAlone("aab") should return 2.
Passed
permAlone("aaa") should return 0.
Passed
permAlone("aabb") should return 8.
Passed
permAlone("abcdefa") should return 3600.
Passed
permAlone("abfdefa") should return 2640.
Passed
permAlone("zzzzzzzz") should return 0.
Passed
permAlone("a") should return 1.
Passed
permAlone("aaab") should return 0.
Passed
permAlone("aaabb") should return 12.
*/
