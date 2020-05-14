function Workshop(teacher){
	this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
	console.log(this.teacher, question);
}

var deepJs = new Workshop("Kyle");

deepJs.constructor === Workshop; 
console.log(deepJs.__proto__ === Workshop.prototype);  //dunder prototype

Object.getPrototypeOf(deepJs) === Workshop.prototype;

/* 
Object 		-----prototype------>  {} line 0 unnamed object
       		<----constructor----	^
----------------------------------- ^ //hidden link
									^
Workshopt -----prototype----> 	  {ask} line 1 unnamed object
		  <-----constructor--		/
								   /
					 deepJs {teacher}


when we call the deeJs.constructor it looks at the unnamed object
which has the constructor property pointing to Workshop

deepJs.__proto__ look at line 1 unnamed object then line 0 unnamed objcect and finds __protoo__
which is a getter function.

*/