let man={
    name: "John", 
    age: 30, 
    city: "New York",
    coding: function(){
        console.log("I love coding!");}
};
console.log(man.name); 
console.log(man['age']); 
man.country = "USA"; // Adding a new property
console.log(man.country); 
man.coding(); 

