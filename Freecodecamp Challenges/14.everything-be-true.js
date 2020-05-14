/*
A truthy value is a value that translates to true when evaluated in a Boolean context.

All values are truthy unless they are defined as falsy 23 (i.e. except for false , 0 , "" , null , undefined and NaN )

You can also get the boolean value of a variable by using the bang operator ( ! ) twice:

!!variable // When the variable is truthy, a double bang (!!) will evaluate 
*/

function truthCheck(collection, pre) {
  for(let val in collection){
    console.log(!!collection[val][pre]);
    if(!!collection[val][pre]=== false) return false; 
  }
  return true;
}

truthCheck([{"single": ""}, {"single": "double"}], "single");
