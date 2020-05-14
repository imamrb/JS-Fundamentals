let sum = 0;
function sumFibs(num) {
  let sum = 1;
  let prev = 1, curr = 1;
  if(num==1) return sum;
  
  while(curr<=num){
      //console.log(curr);
      if(curr%2==1){
        sum += curr;
      }
      curr = curr + prev; 
      prev = curr - prev;
  }
  console.log(sum);
  return sum;
}

sumFibs(4);
