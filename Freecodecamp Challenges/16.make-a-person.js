/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
 The methods that take an argument must accept only one argument and it has to be a string. 
 hese methods must be the only available means of interacting with the object.

 ****Test Cases*******
Object.keys(bob).length should return 6.
Passed
bob instanceof Person should return true.
Passed
bob.firstName should return undefined
Passed
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
Passed
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
Passed
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  firstAndLast = firstAndLast.split(" ");
  let _firstName = firstAndLast[0];
  let _lastName = firstAndLast[1];
  this.getFullName = function(){
    return (this.getFirstName() + " "+this.getLastName());
  }
  this.getFirstName = function(){
    return _firstName; 
  }
  this.getLastName = () =>{
    return _lastName; 
  }
  this.setFirstName = first => {
    _firstName = first;
  }
  this.setLastName = last => {
    _lastName = last;
  }
  this.setFullName = firstAndLast => {
    firstAndLast = firstAndLast.split(" ");
    _firstName = firstAndLast[0];
    _lastName = firstAndLast[1];
  }
}

var bob = new Person('Bob Ross');
bob.getFullName();
let molly = new Person('Bob Merly');
console.log(bob.getFullName());