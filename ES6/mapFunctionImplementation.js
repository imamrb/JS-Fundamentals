/*
the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't. */

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr){
  var newArray = [];
  // 
  for(let i=0; i<s.length; i++){
    newArray.push(callback(arr[i]));
  }

  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
}, s);
