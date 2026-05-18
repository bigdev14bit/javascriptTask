let array = [2, 2, 2, 5, 87, 30, 21];

let duplicate = 0;

for(let index = 0; index < array.length; index++) {
  if(array[index] === 2) {
    duplicate = duplicate + 1;
  }
}
console.log("Duplicate :",duplicate);
