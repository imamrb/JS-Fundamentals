var name = "Santho";

//Anonymous IIFE
(function(name){
	console.log(name);
})("Elon"); //IIFE helps to enclose variables

console.log(name); //"Santho"

/*** Another Usage ****/
function fetchName(){
	throw new Error("Demo eror!");
}
var newName = (function getName(){
	try {
		return fetchName();
	}
	catch (err){
		//console.log(err); 
		return "New Santho";
	} 
})(); //this is an illustration of how we can use IIFE with try and catch block

console.log(newName); //New Santho