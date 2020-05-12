/** If we turn on strict mode, it will give a reference error 
if we try to assign a value in a target variable that has not created in compile time!
To see the difference, run the code by turning on the strict mode **/

// "use strict";

var top = "Global Scope";

function functionScope(){
	top = "still global scope";
	topic = "Auto created in global scope"; //reference error while in strict mode
	console.log(top); //still global scope;
}
console.log(top); //global scope

functionScope();

top; //still global scope;

console.log(topic); //will auto create in global scope