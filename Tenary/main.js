let age = Number(prompt("Enter your age:"));
let permission = age <18 ?  "Denied" : "Allowed";
console.log(`You are ${permission} to vote.`);

let ID = true;
//let Id = Number(prompt("Enter your id number"));
let group = ID ? "You are an adult" : "You are still a kid";
console.log(group);

let num = Math.random();
num = num * 8 ;
side = Math.floor(num);
console.log(side);


//Rock paper scissors game
let computer = "scissors";
let playerOne = "rock";
let winner = 
playerOne === computer ? "Tie game!"
:playerOne === "rock" && computer === "paper"
? "Computer wins!"
:playerOne === "paper" && computer === "scissors"
? "Computer wins!"
:playerOne === "scissors"  && computer === "rock"
? "Computer wins!"
:"Player one wins!"

console.log(winner);
