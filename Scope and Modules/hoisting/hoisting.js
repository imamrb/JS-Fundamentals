
teacher = "Kyle"; 
var teacher;  //Variable hoisting
console.log(teacher);

//function hoisting -- useful
console.log(getTeacher()); //Kyle

function getTeacher(){ 
  return teacher;
}