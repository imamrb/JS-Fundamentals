//solution 1
function dropElements(arr, func) {
  let flag = false, cnt = 0;

  arr.forEach(val => {
    if(func(val)==false && flag==false) cnt++;
    else flag = true;
  });
  
  return arr.slice(cnt, );
}

dropElements([1, 2, 3], function(n) {return n < 3; });

//solution 2
function dropElements(arr, func) {
  while(arr.length>0 && !func(arr[0])) arr.shift();

  return arr; 
}

dropElements([1, 2, 3], function(n) {return n < 3; });

