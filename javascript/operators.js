console.log(5 == '5'); // true, type conversion happens
console.log(5 === '5'); // false, no type conversion, different types
console.log(true == 1); // true, type conversion happens
console.log(true === 1); // false, no type conversion, different types
console.log(null == undefined); // true, null and undefined are considered equal in non-strict comparison
console.log(null === undefined); // false, different types  
//logical operators
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

console.log( !true ); // false
console.log( !0 ); // true
//ternary operator
let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed); // true