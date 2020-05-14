function sumPrimes(num) {
  //Generating Primes
  let prime = new Array(num+1).fill(0); //array of zeroes 
  for(let i=2; i*i<=num; i++){
    for(let j = i*i; j<=num; j+=i){
        prime[j] = 1;
    }
  }

  //calculate sum
  let sum = 0;
  for(let i=2; i<=num; i++){
      if(prime[i]===0) sum+=i;
  }
  console.log(sum);
  return sum;
}

sumPrimes(977);
