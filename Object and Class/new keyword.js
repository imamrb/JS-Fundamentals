

function ask(question){
	console.log(this.teacher, question);
}
var workshop1 = {
	teacher : "Kyle",
}

ask.call(workshop1, "Explicit Binding");

var result = new ask("What is new doing here?");
//invoking the function in a new empty object (this) context 

ask.call({} , "Similar to using new before function");


