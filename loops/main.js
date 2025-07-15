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


let myCar = {
  make : "Volkswagen",
  model : "Golf",
  year : "1999",
  color : "black",
}
for (let prop in myCar){
  let values = (myCar[prop]);
  console.log(values);
  //console.log(prop);
}
//This helps in the convertion of the keys and thevalues of the object into an array 
let cars = Object.keys(myCar);
console.log(cars);

let car2 = Object.values(myCar);
console.log(car2);
  
let arrKeys = Object.keys(myCar);
for(let i = 0; i < arrKeys.length; i++) {
 console.log(arrKeys[i] + ": " + myCar[arrKeys[i]]);
}

let vehicles = [
 {
 model: "Golf",
 make: "Volkswagen",
 year: 1999,
 color: "black",
 },
 {
 model: "Picanto",
 make: "Kia",
 year: 2020,
 color: "red",
 },
 {
 model: "Peugeot",
 make: "208",
 year: 2021,
 color: "black",
 },
 {
 model: "Fiat",
 make: "Punto",
 year: 2020,
 color: "black",
 }
];

for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].year >= 2021) {
    if (vehicles[i].color === "black") {
    console.log("I have found my new car:", vehicles[i]);
    break;
    }
  }
}