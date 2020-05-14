## this Keyword

A function's this references the execution context 
for that call, determined entirely by how the function
was called and where it is called. Callsite.


## `new` keyword

	1. Create a brand new empty object
	2. Lint that object to another object
	3. Call function with `this` set to the new object
	4. If function does not return an object, assume return 
	of `this`

## Context precedence
How to determine if the function is called in multople context
Ex: `new (workshop.ask.bind(workshop))("What does this do?");`

	1. Is this function called by `new`
	2. Is this function called by call() or apply()
		Note: bind() effectively uses apply()
	3. Is this function called on a context object? 
	4. DEFAULT: gloabal object (except strict mode)
