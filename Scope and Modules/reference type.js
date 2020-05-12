var targetReference = "this is a target reference";
//targetReference is a variable that is a target to assign a new value during 
//execution phase.

function print(){ 
 	console.log(target); //here target is a source reference! Because it will supply a value during execution page
 }

 print(); // source reference. Because scope manager will supply the functions definations during execution page