//closures 
function outerFunction() {
    let outerVariable = 'I am from the outer function!';    
    function innerFunction() {
        console.log(outerVariable); // Accessing variable from the outer function
    }
    return innerFunction; // Returning the inner function
}
let closure = outerFunction();
closure(); // Calling the closure   
