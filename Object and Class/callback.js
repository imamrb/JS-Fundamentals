setTimeout(function (){
	console.log("one");
	setTimeout(function(){
		console.log("Two");
	}, 1000);
}, 1000);

console.log("Go Back - Callback");