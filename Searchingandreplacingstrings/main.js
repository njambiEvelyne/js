//Regular expressions
let text = "I love Javascript";
console.log(text.match(/JAVASCRIPT/i));

//Specifying multiple options for words
let text2 = "I love javascript, vue and angular";
console.log(text.match(/angular|javascript/gi));

//Groups
console.log("Groups:")
let text3 = "I love Javascript!";
console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

//Repeating 
let text4 = "abcabcabcabc";
console.log(text.match(/(abc){1,2}/));



