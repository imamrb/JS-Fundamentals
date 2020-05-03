function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
  for(let i=0; i<collection.length; i++){
    let flag = true; 
    for(let prop in source){
      if(collection[i].hasOwnProperty(prop) && collection[i][prop] === source[prop]){
      }
      else {
        flag = false; 
        break; 
      }
    }
    if(flag===true){
      arr.push(collection[i]);
    }
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([ { first: "Tybalt", last: "Capulet" }, { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }], { first: "Tybalt", last: "Capulet" });


function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
 arr =  collection.filter(elem => {
    let flag = true; 
    for(let prop in source){
      if(elem.hasOwnProperty(prop) && elem[prop] === source[prop]){
      }
      else {flag = false; break; }
    }
    return flag; 
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([ { first: "Tybalt", last: "Capulet" }, { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }], { first: "Tybalt", last: "Capulet" });