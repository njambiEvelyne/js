//Lopps
//1. while loop
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
 if (someArray[0] === "Antal") {
 console.log("Found her!");
 notFound = false;
 } else {
 someArray.shift();
 console.log(someArray);
 }
}

//Fibonacci using while loops
let nr1 = 0;
let nr2 = 1;
let temp;
let fibonacciArray = [];

while (fibonacciArray.length <31){
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
  
}
console.log(fibonacciArray);

// let maximum = 10;
// while (maximum){
//   let randomNumber = Math.floor(Math.random);
//   console.log(maximum);
// }

//2. For Loops
let arr = [];
for (let i = 0; i <15; i++){
  arr.push(i);
  console.log(arr);
}
console.log(arr);

let arrayOfArrays = [];
for (let i = 0; i<3; i++){
  arrayOfArrays.push(i);
  for (let j =0; j <7; j++){
    arrayOfArrays.push(j);
  }
}
console.log(arrayOfArrays);
console.table(arrayOfArrays);

// let names = ["Chella", "John", "Maxime", "Bobbi"];
// for (let i = 0; i< names.length; i++){
//   names = "Hello " + names;
//   console.log(names);
// }
