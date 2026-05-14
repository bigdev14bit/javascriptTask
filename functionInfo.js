function AgeChecker(age) {
  if(age > 100) {
    return "Very Old";
  } else if(age > 50) {
    return "Adult"
  } else if(age > 18) {
    return "Youth";
  } else if(age > 13) {
    return "Teenager";
  } else {
    return "Child";
  }
//console.log(info(300))
}
console.log(AgeChecker(300));
