//global scope
var globalVar = "I am a global variable";
function globalFunction() {
  console.log(globalVar); // Accessing global variable
}
globalFunction(); // Output: I am a global variable

//function scope    
function myFunction() {
  var functionVar = "I am a function variable";
  console.log(functionVar); // Accessing function variable
}   
myFunction(); // Output: I am a function variable
//console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined (functionVar is not accessible outside the function)
//block scope
if (true) {
  let blockVar = "I am a block variable";
  console.log(blockVar); // Accessing block variable
}
//console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (blockVar is not accessible outside the block)
//var in block scope
if (true) {
  var blockVar2 = "I am a block variable declared with var";
  console.log(blockVar2); // Accessing block variable
}
//console.log(blockVar2); // Uncaught ReferenceError: blockVar2 is not defined (blockVar2 is not accessible outside the block)
