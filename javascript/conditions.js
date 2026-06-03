let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  console.log( 'You guessed it right!' );
}
else if (year > 2015) {
  console.log( 'Too late' );
}
else {
  console.log( 'How can you be so wrong?' ); // any value except 2015
}
//switch statement
let day=0
switch(day){
    case 0:
    case 6:
        console.log("Happy weekend!");
        break;
    case 1:
        console.log("happy monday");
        break;  
    case 2:
    case 3:
    case 4:
        console.log("happy Midweeks");
        break;
    case 5:
        console.log("happy friday");
        break;
}