const prompt = require("prompt-sync") ();

function userLogin(username, password) {

  if(passWord.length < 6) {
    console.log("Weak password");
    console.log("Password should be more than 6 characters");
  } else {
    console.log("Valid password");
    console.log("LOGIN SUCCESSFUL");
  }

}

let userName = prompt("Enter UserName: ");
let passWord = prompt("Enter PassWord: ");
console.log(userLogin(userName, passWord));
