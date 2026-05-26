//For loop :Best when you know how many times you want to execute a statement or a block of statements.
let i=1;
let row="";
let j=1;
let n=10;
for(i=1;i<=n;i++)
{
    row="";
    for (let j=1;j<=n;j++)
        {
        if(i==1 || i==n || j==1 || j==n){
            row=row + "*";
        }
        else{
            row=row + " ";
        }
    }
    console.log(row);
}
/*

//while loop:Best when you want to repeat a block of code an unknown number of times, and you want the loop to continue until a certain condition is met.
let j=1;
while(j<=5){
    console.log("*");
    j++;
}

//do..while:Best for user interaction scenarios, where you want to ensure that the code block is executed at least once, regardless of the condition being true or false at the start.
//atleast one time execute 
let k=1;
do{
    console.log("*");
    k++;
}while(k<=5)

//for of loop:Best for iterating over iterable objects like arrays, strings, maps, sets, etc., where you want to access each element directly without needing an index.

//for in loop:Best for iterating over the properties of an object, where you want to access both the property names and their corresponding values.*/