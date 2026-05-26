//type conversion   nmuber to string
let a=100
console.log(a);
console.log(typeof a);
let b=String(a)
console.log(b);
console.log(typeof b);
//boolean to string
let ab=true
console.log(ab);
console.log(typeof ab);
let ba=String(ab)
console.log(ba);
console.log(typeof ba);
//string to number
let c="123"
console.log(c);
console.log(typeof c);
let d=Number(c)
console.log(d);
console.log(typeof d);
let e="123abc"//e="abc123" NAN e=" 123abc" 123 e=" 1 2 3" 1
console.log(e);
console.log(typeof e);
let f=parseInt(e)//parseInt() will extract the number from the string and ignore the non-numeric characters
console.log(f);
console.log(typeof f);
let g=false
console.log(g);
console.log(typeof g);
let h=Number(g)
console.log(h);
console.log(typeof h);
//number to boolean 
let i=0//let i=123 and any non-zero number is truthy value
console.log(i);
console.log(typeof i);
console.log(Boolean(i));
let j="hello"/2//NAN,j=0,j=null then false
console.log(j);
console.log(typeof j);
console.log(Boolean(j));
let k=""//empty string is falsy value k=null k=[]
console.log(k);
console.log(typeof k);
console.log(Boolean(k));
let l="hello" //non-empty string is truthy value
console.log(l);
console.log(typeof l);
console.log(Boolean(l));
