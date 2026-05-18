//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let max = array[0];

//for(let index = 0; index < array.length; index++) {
  //if(array[index] > max) {
    //max = array[index];
  //}  
  //console.log("Max is",max);
//}
//console.log("Max is",max);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayy(array) {

    let max = 0;

for(let index = 0; index < array.length; index++) {
  if(array[index] > max) {
    max = array[index];
  }
    //return max;
}
return max;
}
console.log("Max is",arrayy(array));
