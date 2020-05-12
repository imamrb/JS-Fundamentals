var top = "Gloabl Scope";

function scope1(){
	var top = "Block Scope";

	function scope2(low){
		console.log(top, low); //top is inside scope1 , low is inside scope2
	}
	scope2(" > Nested Scope");
}

scope1(); //Block Scope > Nested Scope

scope2(); //reference error. 
/*Because here scope2 is a source reference, 
scope manager needs to deliver it's value(function definations) 
but don't find in any accessible scope. So it's a reference error! */