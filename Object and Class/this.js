function ask(q){
	console.log(this.teacher, q);
}

var myContext = {
	teacher : "Kyle"
}

ask.call(myContext, "What is explicit binding"); //Kyle What is explicit binding
/* Explicitly defining context */

var workshop = {
	teacher: "MDN",
	ask(question){
		console.log(this.teacher, question);
	}
}
workshop.ask("What is implicit binding?");
//MDN What is implicit binding?


setTimeout(workshop.ask, 10, "Lost this?");
//undefined Lost this? //actually workshop.ask.call(window)

setTimeout(workshop.ask.bind(workshop), 10, ", Hard bound this?"); //Hard Binding
//"MDN, Hard bound this?"