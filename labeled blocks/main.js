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
logRecursive(14);