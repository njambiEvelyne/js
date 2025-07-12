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
// let computer = "scissors";
// let playerOne = "rock";
// let winner = 
// playerOne === computer ? "Tie game!"
// :playerOne === "rock" && computer === "paper"
// ? "Computer wins!"
// :playerOne === "paper" && computer === "scissors"
// ? "Computer wins!"
// :playerOne === "scissors"  && computer === "rock"
// ? "Computer wins!"
// :"Player one wins!"

// console.log(winner);

let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random(choices) * choices.length);
let computerChoice = randomIndex;
console.log(computerChoice);
function game(){
  let playerOneChoice = prompt("Do you choose 'rock', 'paper', or 'scissors'?");
  let victor =
    playerOneChoice === computerChoice 
    ? "Tie game"
    :playerOneChoice === "rock" && computerChoice === 3
    ? "Player One wins!"
    :playerOneChoice === "paper" && computerChoice === 1
    ? "Player one Wins!"
    :playerOneChoice === "scissors" && computerChoice === 2
    ? "Player one Wins!"
    : "Computer wins!"

console.log(victor);
let message = (`User entered ${playerOneChoice} and the computer chose ${computerChoice}`);
console.log(message);
}

let play =  confirm ("Do you want to play?");
if (play){
  game();
}else{
  console.log("Oopps! Maybe next time!");
}


let repeat = confirm("Do you wish to play again?");
if (repeat){
  game();
}else{
  console.log("Thank you for the rounds you've played!");
}
