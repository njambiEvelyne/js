//Searching and replacing strings 
console.log("Searching and replacing strings!!");
let text = "That's not the case.";
console.log(text.search(/Case/i));

//Replacing
console.log("This method for global replacement of a string: \n")
let text2 = "\t\t\tCoding is fun. Coding opens up a lot of opportunities."
console.log(text2.replace(/Coding/g, "Javascript"));
console.log("This method only alters the first string it encounters:")
console.log(text2.replace("Coding", "Javascript"));

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
const validEmail =document.getElementById("email");
console.log(validEmail.match(emailPattern));
