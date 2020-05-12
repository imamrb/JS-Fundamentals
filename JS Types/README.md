# JS TYPES

The latest ECMAScript standard defines nine types:

## Primitive Types
Six Data Types that are primitives, checked by typeof operator:

   - undefined : `typeof instance === "undefined"`
   - Boolean : `typeof instance === "boolean"`
   - Number : `typeof instance === "number"`
   - String :` typeof instance === "string"`
   - BigInt : `typeof instance === "bigint"`
   - Symbol : `typeof instance === "symbol"`
   
> function is a subtype of object.
> array is also a subtype of object or behave like object.
 

#### Undefined v Undeclared v Uninitialized (TDZ)
``` var v; 
typeof v;  // "undefined"
//typeof always returns string
```
```
typeof doesntExist; //undefined (JS bug) 
//actually undeclared 
```

### null
 typeof instance === "object". Special primitive type having additional usage for it's value: if object is not inherited, then null is shown;

### Object
 `typeof instance === "object"`. Special non data but Structural type for any constructed instance instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;

### Function 
non data structure, though it also answers for typeof operator: `typeof instance === "function"`. This answer is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.

> Keep in mind the only valuable purpose of typeof operator usage is checking the Data Type. If we wish to check any Structural Type derived from Object it is pointless to use typeof for that, as we will always receive "object". The indeed proper way to check what sort of Object we are using an instanceof keyword. But even in that case there might be misconceptions.

