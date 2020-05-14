/*
An arrow function must resolve to a binding in a lexical 
enclosing environment
*/

var workshop = {
	teacher: "MDN",
	ask: function(question){
		console.log(this.teacher, question);
		(() => {
			console.log(this.teacher);
		})(); //MDN;

/*		setTimeout( () => {
			console.log(this.teacher, question);
		}, );*/
	},
	ans : (answer) => {
		console.log(this.teacher, answer);
	} //arrow function is anonymous, lobal object has no member of teacher, so undefned

}
workshop.ask("What is implicit binding?");
workshop.ans("Why this is not working? ");
workshop.ans.call(workshop, "Still not working!");

//this points to ask function, ask is bound to workshop where it is 
//called; workshop.ask() ; thus the context is workshop;