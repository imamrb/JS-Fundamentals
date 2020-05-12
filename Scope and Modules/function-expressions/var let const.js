  for(var i=0; i<5; i++){
    
  }
  console.log(i);  // 5 OOPS! use let in this case


//if a variable is needed for a short period of time, make a block using curly braces and 
//use let that is to explicitly telling its a block scope varibale.
  {
  	let name = "Maher";  //Block
  	console.log(name);
  }

/* 
const: the variable can not be reassigned
but we can mutate the array as we are not reassigning whole variable
*/
var teacher = "Kyle Simpson";
const myTeacher = teacher;

try{
	myTeacher = "Rober Dwyne";
}
catch(error){
	console.log(error); //throws an error! 
}


const teachers  = ["Kyle", "Simpson"];
teachers[1] = "Robert"; //allowed

console.log(teachers);
