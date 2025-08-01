// //Ways to use cookies
// let cookie = docodeURIComponente(document.cookie);
// let cookieList = cookie.split(";");
// for(let i = 0; i<cookieList.length; i++){
//   let c = cookieList[i];
//   if(c.chaAt(0) == " "){
//     c = c.trim();
//   }
//   if(c.starsWith("name")){
//     alert(c.substring(5, c.length));
//   }
// }

//Simpler ways to create a cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 12:00:00 GMT";
//Get cookie
let cookies = document.cookie;
console.log("Cookie:",cookies);

const greetingElement = document.getElementById("greeting");
const nameInput = document.getElementById("name");
const saveButton = document.getElementById("save");

//Function to set cookie
function setCookie(name, value, days){
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value};expires = ${date.toUTCString()};path=/`;
}
//Function to get a cookie
function getCookie (name){
  const cookie = document.cookie.split(";");
  for(let i = 0; i<cookies.length; i++){
    const cookie = cookie[i].trim();
    if(cookie.startsWith(`${name}=`)){
      return cookie.substring(name.length+1);
    }
  }
  return null;
}

//Check user has saved name
const savedName = getCookie("username");
if(savedName){
  greetingElement.textContent =`Hello, ${savedName}!`;
  nameInput.value=savedName;
}

//Save the name when the button is clicked
saveButton.addEventListener("click", ()=>{
  const name = nameInput.value;
  setCookie("username", name, 30);//Save for 30 days
  greetingElement.textContent=`Hello, ${name}!`;
});