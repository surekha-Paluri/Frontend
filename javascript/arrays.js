//arrays

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3

//array methods

fruits.push("grape"); // Adding a new element to the end of the array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop(); // Removing the last element from the array
console.log(fruits); // Output: ["apple", "banana", "orange"]

fruits.unshift("kiwi"); // Adding a new element to the beginning of the array
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange"]

fruits.shift(); // Removing the first element from the array
console.log(fruits); // Output: ["apple", "banana", "orange"]   

fruits.splice(1, 1); // splice(startindex, deleteCount, items) - Removing 1 element at index 1
console.log(fruits); // Output: ["apple", "orange"]

fruits.splice(1, 0, "grape", "kiwi");//grape and kiwi will be added at index 1 without removing any element
console.log(fruits); // Output: ["apple", "grape", "kiwi", "orange"]

fruits.splice(1, 2, "banana", "melon");//banana and melon will be added at index 1 and 2 and grape and kiwi will be removed
console.log(fruits); // Output: ["apple", "banana", "melon", "orange"]

//array constructor
let numbers = new Array(5);
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
console.log(numbers); // Output: [10, 20, 30, 40, 50]
//for of loop
for (let x of numbers) {
    console.log(x); // Output: 10, 20, 30, 40, 50
}

//indexOf() method
let index = fruits.indexOf("banana");
console.log(index); // Output: 1

//lastIndexOf() method
let lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex); // Output: 1

//includes() method
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true

//array methods with callback functions
let numbers1 = [1, 2, 3, 4, 5];

//map() method
let squaredNumbers = numbers1.map(x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//filter() method
let evenNumbers = numbers1.filter(x => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//reduce() method
let numbers=[1, 2, 3, 4, 5];
let result=numbers.reduce((total,x) => total + x, 0);
console.log(result); // Output: 15

//some() method
let numbers = [1, 2, 3, 4, 5];
let hasgradeA=numbers.some(x => x > 4);
console.log(hasgradeA); // Output: true

//every() method
let numbers = [1, 2, 3, 4, 5];
let allPositive=numbers.every(x => x > 0);
console.log(allPositive); // Output: true

//find() method
let numbers = [1, 2, 3, 4, 5];
//findindex() method
let index = numbers.findIndex(x => x > 3);
console.log(index); // Output: 3 (index of the first element greater than 3)

//sort() method
let fruits1 = ["banana", "apple", "orange"];
fruits1.sort();
console.log(fruits1); // Output: ["apple", "banana", "orange"]
let scores= [90, 80, 70, 60, 50];
scores.sort();
console.log(scores); // Output: [50, 60, 70, 80, 90]