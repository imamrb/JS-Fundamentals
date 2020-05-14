'use strict';
function Person(firstName, lastName, age){
	this.firstName = firstName; 
	this.lastName = lastName; 
	this.age = age; 
}

let jim = new Person("Jim", "Cooper" , 30);
let sofia = new Person("Sofia", "Turner", 25);

/*Object.freeze(sofia);
console.log(Object.getOwnPropertyDescriptor(sofia, "firstName"));
sofia.firstName = "Mrs. Sofia"; //TypeError, read only*/

//console.log(JSON.stringify(jim));


/**** Getter and Setter *******/

Object.defineProperty(sofia, 'fullName',
{
	get: function(){
		return this.firstName + ' ' +this.lastName;
	},
	set: function(value){
		var nameParts = value.split(' ');
		this.firstName = nameParts[0];
		this.lastName = nameParts[1];
	}
});
sofia.fullName = 'Mrs.Sofia Turner';

console.log(sofia.fullName);