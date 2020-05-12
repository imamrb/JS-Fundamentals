/*
Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope
*/
for (let i=1; i<=3; i++){
	setTimeout(function print(){
		console.log(i);
	}, i*1000);
	if(i==3) console.log("For loop ended!");
}

/* 
Here print function executes after the timeout. For loop finishes execution before the timeout. But the value of i retains 
in the print function though the for loop has already executed. That means the setTimeout closure preserved the variable i in the moment.
That is closure. We close over variable, not value.
*/

/**** another example *******/
let anotherAnswer = " Nice~"; 

function ask(question){
	let answer = " Here is a closure! " ;
	return function holdYourQuestion(){
		console.log(question + answer + anotherAnswer);
	}
}

var myQuestion = ask("What is closure?"); 

myQuestion();  
/* myQuestion holds the holdYourQuestion function and remember its lexical scope. 
Thus it can print question by later invoking myQuestion(). Think myQuestion like a backpack where it holds the 
holdYourQuestion function as well as its lexical scope variable question. */


/*
Output: 

For loop ended!
What is closure? Here is a closure!  Nice~
1
2
3
[Finished in 3.4s]

*/