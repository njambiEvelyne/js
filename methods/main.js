//Methods
//1. Date Methods
let time = Date.now();
console.log(time);

//Another way to create dates
let time2 = new Date();
console.log(time2);

//The third method to create dates
let milliDate = new Date(1000);
console.log(milliDate);

//Methods to get and set the lements of a date
let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
console.log(d);

d.setMonth(9);
console.log(d)