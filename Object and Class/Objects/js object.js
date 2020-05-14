let Person = {
	firstName : "Jim",
	lastName : "Copper",
	isAdult : function(){
		return this.age >= 18;
	}
}
Person.age = 30;

/* Printing Object

console.log(Person.isAdult()); //true

console.log(Object.keys(Person));

for(let key in Person){
	console.log(Person[key]);
}*/

/*** Objece Equality *****/

//for comparing two objects JavaScript uses their memory address
let Person2 = Person;
Person2.address = "Dhaka";
console.log(Person2.address, Person.address); //Dhaka Dhaka -> Same address
Person === Person2; //true;
Object.is(Person===Person2) //true; 

/**** Object.assign ****/
let AnotherPerson = {};
Object.assign(AnotherPerson, Person); //copy all the parameters to leftmost object
Person === AnotherPerson; //false; Different Object

/*** Creating new object from two or more objects*********/

AnotherPerson.job = "Developer";

function mergeObjects(...arg){
	return Object.assign({}, ...arg);
}

let merge = mergeObjects(Person, AnotherPerson, Person2);

console.log(merge);
/*
{
  firstName: 'Jim',
  lastName: 'Copper',
  isAdult: [Function: isAdult],
  age: 30,
  address: 'Dhaka',
  job: 'Developer'
}*/