const employee = {

        "name" : "Dapo", 
        "role" : "Engineer", 
        "salary" : 50000, 
        "department" : "Tech"
};

//const {name, salary} = extracted;

function destructingMethod(extracted) {
  const {name, salary} = extracted;
  return `Name : ${name}, Salary : ${salary}`;
}
let output = destructingMethod(employee);
console.log(output);
