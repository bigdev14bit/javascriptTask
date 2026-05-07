const personal = {"name" : "Ngozi", "age" : 25}
const professional = {"role" : "Developer", "company" : "Semicolon"}

const linux = {...personal, ...professional}
console.log("Result:", linux);
