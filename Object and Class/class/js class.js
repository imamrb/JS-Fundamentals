class Workshop {
	constructor(teacher){
		this.teacher = teacher;
	}
	ask(question){
		console.log(this.teacher, question);
	} 
}

class AnotherWorkshop extends Workshop {
	ask(msg){
		super.ask(msg.toUpperCase());
	}
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.ask("Are classes super?");

