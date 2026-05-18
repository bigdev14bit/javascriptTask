let array = [15, 22, 4, 98, 12];

let smallest = array[0];

for(let index = 0; index < array.length; index++) {
  if(array[index] < smallest) {
  smallest = array[index];
  }
}
console.log("Smallest :",smallest);
