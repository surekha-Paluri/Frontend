function showMMessage() {
  console.log( 'Hello everyone!' );
}
showMMessage();
//Outer variable
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John


function calcgrade(studentmarks,studentMaxmarks){
    let percentage=(studentmarks/studentMaxmarks)*100
    let grade;
    if(percentage>=90){ 
        grade='A'
    }   
    else if(percentage>=80){
        grade='B'
    }
    else if(percentage>=70){
        grade='C'
    }
    else if(percentage>=60){
        grade='D'
    }
    else{
        grade='F'
    }
    console.log(grade);
}
calcgrade(85,100);
