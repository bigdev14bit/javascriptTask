const personal = {"name" : "Kemi", "age" : 27};
const professional = {"role" : "Designer", "company" : "TechCorp"};

function mergeObject(firstObject, secondObject) {
  return {...firstObject, ...secondObject}
}

let output = mergeObject(personal, professional);
console.log("Output :",output);
