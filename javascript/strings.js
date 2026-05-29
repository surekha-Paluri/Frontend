//string are immutable

let s1="Hello";
let name="surekha";
//string literals template
let s2=`Hello ${name}`;
console.log(s1);
console.log(s2);

//string interning
let s3="Hello";
let s4="Hello";
console.log(s1===s3); // true, string literals are interned
console.log(s1===s4); // true, string literals are interned
let s5=new String("Hello");
console.log(s1===s5); // false, s5 is an object, not a primitive string
console.log(s1==s5); // true, type conversion happens, s5 is converted to a primitive string

//string methods
let userInput ="Alice Jonson | ALICE@gmail.COM | JavaScript Developer and coffee enthusiast. i love javascript.";

//split
let parts = userInput.split("|");
console.log(parts);

//trim
let name1 = parts[0].trim();
console.log(name1);

//toUpperCase
let name2 = parts[0].trim().toUpperCase();
console.log(name2);

//toLowerCase
let email = parts[1].trim().toLowerCase();
console.log(email);
let bio = parts[2].trim();

//includes
let likejs = bio.includes("javascript"); // true
console.log(likejs);

//indexOf
let index = bio.indexOf("coffee");
console.log(index); // 39 (index of the first occurrence of "coffee")

//lastIndexOf
let lastIndex = bio.lastIndexOf("javascript");
console.log(lastIndex); // 57 (index of the last occurrence of "javascript")

//replace
bio = bio.replace("JavaScript", "JS"); // replace all occurrences of "javascript" with "JS", case-insensitive
console.log(bio);

//replaceAll
bio = bio.replaceAll("JavaScript", "JS"); // replace all occurrences of "javascript" with "JS", case-sensitive
console.log(bio);

//slice
//i want js developer
profession=bio.slice(0,bio.indexOf("and")).trim(); // JS
console.log(profession);

//length
console.log(bio.length); // 57

//endsWith
let validEmail = email.includes("@") && email.endsWith("@gmail.com"); // true
console.log(validEmail);

//startsWith
let validName = name1.startsWith("Alice"); // true
console.log(validName);

//repeat
let separator = "-".repeat(20);
console.log(separator); // --------------------

let userProfile=
`
${separator}
Name      : ${name2}
Email     : ${email}
profession: ${profession}
likejs    : ${likejs}
${separator}
`;
console.log(userProfile);

