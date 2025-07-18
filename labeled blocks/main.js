//Breaking and continue and labeled blocks
let groups = [
 ["Martin", "Daniel", "Keith"],
 ["Margot", "Marina", "Ali"],
 ["Helen", "Jonah", "Sambikos"],
];
outer:
for (let group of groups) {
  inner:
  for (let member of group) {
    if (member.startsWith("M")){
      console.log("found one starting with M:", member);
      continue outer;
    }
  }
}

// function getRecursive(nr) {
//  console.log(nr);
//  getRecursive(--nr);
// }
// getRecursive(3);

function getRecursive(nr) {
 console.log(nr);
 if (nr > 0) {
 getRecursive(--nr);
 }
}
getRecursive(20);

function logRecursive(a){
  console.log("Started function:", a);
  if (a > 10) {
    logRecursive(a-1);
  }else{
    console.log("Done with recursion");
  }
  console.log("Ended function:", a);
}
logRecursive(14)

function check(x ){
  x = prompt("Enter the value for X");
  if (x = 0){
    console.log(1);
  }else{
    (x - 1);
  }
}

check(3);

function doOuterFunctionStuff(nt) {
 console.log("Outer function");
 doInnerFunctionStuff(nt);
 function doInnerFunctionStuff(x) {
 console.log(x + 7);
 console.log("I can access outer variables:", nt);
 }
}
doOuterFunctionStuff(2);
//Anonymous Functions
let variable = function(){
  console.log("Not secret though.");
}
variable();

let unknown = function(z){
  console.log(z);
}
unknown(4);

function anon  (c){
  console.log(c);
}
anon(56);

//Time waiting for printing
let youGotThis = function (){
  console.log("You're doing really well, keep coding");
};
//setTimeout(youGotThis, 1000);
setInterval(youGotThis, 100);

