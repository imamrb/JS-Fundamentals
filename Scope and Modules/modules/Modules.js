/* Module Defination

Modules encapsulate data and behavior(methods) together. The state(data) of a 
module is hed by its methods via closure.

*/

let workshop = (function Module(teacher){
	let publicAPI  = {ask, };
	return publicAPI;

	function ask(question){
		console.log(teacher, question);
	}
	function answer() {
		console.log("Answer can't be accessed! ");
	}
})("MDN");

//console.log(workshop); //{ ask: [Function: ask] }

workshop.ask(": It's a module, right?"); //ask can access teacher because of closure


//workshop.answer(); //TypeError

/*
Here we can access ask function but cannot access other properties like 
teacher. Those are hidden except what is returned.
*/

//Instead of IIFE, we could declare Module as a function declaration and reuse over time

function VirusUpdateModule(virusName){
	var publicAPI = {update, };
	return publicAPI; 


	function update(updateInfo){
		console.log(virusName + ':' + updateInfo);
	}
}

let corona =  VirusUpdateModule("SARS COV-19");

corona.update("Total Infected - 4.23 Million, May 12, 2020");
corona.update("Total Death - 286 Thousand, May 12, 2020");