function mySelf(){  //function declaration

}

var myInfo = function(){ //anonymous function expression

}

var myJob = function jobFunction(){ //named function expression BETTER!

}

mySelf(); //mySelf is in global scope
myJob();
myJob();

jobFunction(); //Reference error! Not in gloal scope
