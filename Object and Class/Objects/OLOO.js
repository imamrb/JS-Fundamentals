//Objects Linked to another objects

var Person = {
	name: function(who){
		this.me = who;
	},
	identify: function(){
		return "I am " + this.me;
	}
}; 

var Japanese = Object.create(Person);
//console.log(Japanese === Person);

Japanese.speak = function(){
	console.log("Hello, " + this.identify() + "from Japan.");
}; 

var jp1 = Object.create(Japanese);
jp1.name("Uzawa ");
jp1.speak();
