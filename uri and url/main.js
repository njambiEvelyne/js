let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

//Mapping arrays
let arr =[1,2, 3, 4, 5];
let mapped_array = arr.map(x => x+1);
console.log(mapped_array);

//Finding the last occurence of an element in an array
let last = arr.lastIndexOf(2);
console.log(last);


//Converting a string to an array
let letters = ("abc");
let letterArray = letters.split("");
console.log("String converted to an array:");
console.log(letterArray);

//Convertig an array toa string
let lettArray = ["a", "b", "c", "d"]
let arrayString = lettArray.join(",");
console.log("Array converted to a string:");
console.log(arrayString);

