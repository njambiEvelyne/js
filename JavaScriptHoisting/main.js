//Functions and the arguments object
function test(a,b,c){
  console.log("first:", a, arguments[0]);
  console.log("second:",b,arguments[1]);
  console.log("third:",c,arguments[2]);

}
test("fun", "js", "secrets");

//Modifying of arguments
function test2(d,e,f){
  d = "nice";
  arguments[1] = "hello";
  console.log("first:",d,arguments[0]);
  console.log("second:",e,arguments[1]);
  console.log("third:",f,arguments[2]);
}
test2("name", "age", "commission");