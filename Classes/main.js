//Classes and objects
class Person {
  #address;
  constructor(name, age, address){
    this.name = name;
    this.age = age;
    this.#address = address;
    this.gender = "Female";
  }
  detail (){
    console.log(`My name is ${this.name}. I am ${this.age} years old. I am a ${this.gender}. I am from ${this.#address}.`);
  }
}
let eva = new Person("Evelyne", 19, "230 Kisii Road");
eva.detail();

//Using getters and tye setters
class Student {
  #firstname;
  #lastname;
  constructor(firstaname, lastname){
    this.#firstname = firstaname;
    this.#lastname = lastname;
  }
  get firstaname(){
    return this.#firstname;
  }
  set firstaname(firstaname){
    this.#firstname = firstaname.toUpperCase;
  }
  get lastname(){
    return this.#lastname;
  }
  set lastname(lastname){
    this.#lastname;
  }
}

class employeesTrack{
  constructor(fName, Lname, numberOfYearsWorked){
    this.fName = fName;
    this.Lname = Lname;
    this. numberOfYearsWorked = numberOfYearsWorked;

  }
  personalInfo(){
    console.log(`My name is ${this.fName}  ${this.Lname}. I have been employed for ${this.numberOfYearsWorked}.`);
  }
}

//let employee1 = new employeesTrack();
let employee1 = new employeesTrack("Evelyne", "Njambi", 3);
employee1.personalInfo();
let employee2 = new employeesTrack("RoseMary", "Muthoni", 5);
employee2.personalInfo();

let arr = [];
arr.push(employee1, employee2);
console.log(arr);

//Menu Items price calculator
class menuOrder{
  #priceBurger = 350;
  #priceFries = 150;

  constructor(numBuger, numFries){
    this.numBuger = numBuger;
    this.numFries = numFries;
    
  }
  calculateTotal(){
    return (this.numBuger * this.#priceBurger) + (this.numFries * this.#priceFries);
  }
  get totalCost (){
    return this.calculateTotal();
  }
} 

const order1 = new menuOrder(2, 1);
const order2 = new menuOrder(1,2);
const order3 = new menuOrder(2, 7);

console.log("Order 1 Total:KES" + order1);
console.log("Order 2 Total:KES" + order2);
console.log("Order 3 Total:KES" + order3);


