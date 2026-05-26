//number
let a=30
console.log(a);

let b=20.5
console.log(b);

console.log(typeof a);
console.log(typeof b);

console.log(a);
//bigint
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
/*
let ab=100
let ba=200n
console.log(ab+ba);/*cannot mix BigInt and other types*/

//string
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log( `the result is ${1 + 2}` ); // the result is 3

console.log( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

const myBirthday = '18.04.1982';

//boolean

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

/*undefined*/
let age;
console.log(age); // undefined  
console.log(typeof age); // undefined

//null
let aage = null;
console.log(aage);   // null
console.log(typeof aage); // object (this is a known JavaScript quirk)   

//symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");    
console.log(sym1 === sym2); // false, symbols are unique
