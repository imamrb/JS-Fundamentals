//Return the LCM of all the numbers in between of the two given numbers

function gcd(a, b){
   return b===0 ? a: gcd(b, a%b);
}
function smallestCommons(arr) {
  
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for(let i=min+1; i<=max; i++) arr.push(i);
  
  //calculating LCM
  let lcm = arr[0];
  for(let i=1; i<arr.length; i++){
    lcm = (arr[i]*lcm)/gcd(arr[i], lcm);
  }
  return lcm;
}
smallestCommons([1,5]);
