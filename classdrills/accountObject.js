const account = {"balance" : 500, "isBlocked" : false}
if(account.isBlocked === "false") {
  console.log("Account Not Blocked");
} else {
  console.log("Account Blocked");
}

if(account.balance < 100) {
  console.log("Balance : Low Balance");
} else if(account.balance > 100 && account.balance < 1000) {
  console.log(`Balance : ${account.balance}`);
} else {
  console.log("OK");
}
