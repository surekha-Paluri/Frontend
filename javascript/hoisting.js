//hoisting :-Moving declarations to the top of the current scope (script or function) before code execution.
//var is intialized with undefined
var x;
console.log(x); // undefined
var x = 5;
console.log(x); // 5    

//let and const are not hoisted
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10
//temporal dead zone (TDZ) is the time between the start of the block and the point where the variable is declared, during which the variable cannot be accessed. Accessing it will result in a ReferenceError.
//var does not have TDZ, it is hoisted and initialized with undefined, so you can access it before declaration without error (but it will be undefined). let and const have TDZ, so accessing them before declaration will throw a ReferenceError.
//let have TDZ, so accessing them before declaration will throw a ReferenceError. const also has TDZ and must be initialized at the time of declaration, so it cannot be accessed before declaration and will also throw a ReferenceError if you try to do so.