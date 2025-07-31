//JavaScript Hoisting
//var x;
// x=5;
// console.log(x);
x = 5;
console.log(x);
var x;

let val = 5;
val+= adder();
val+= adder();
val+= adder();
console.log(val);
function adder(){
  let counter = val;
  for(let i=0; i<val;i++){
    counter++;
  }
  return counter;
}