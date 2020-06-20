function print(name, variable) {
    console.log(
        name + "(" + variable 
        + ") is a " + typeof variable
    );
}

var someNumber = 10;
var someString = "99";
var someBoolean = true;

var sumOfNumberAndString = someNumber + someString;
var sumOfBooleanAndString = someBoolean + someString;
var sumOfNumberAndBoolean = someNumber + someBoolean;

print("sumOfNumberAndString ", sumOfNumberAndString);
print("sumOfBooleanAndString ", sumOfBooleanAndString);
print("sumOfNumberAndBoolean ", sumOfNumberAndBoolean);