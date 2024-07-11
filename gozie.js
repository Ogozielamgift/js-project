// console.warn("welcome to my page");
// let gender;
// gender = "FEMALE";
// console.log(gender);
// const firstname = "Ndukwe";
// const lastname = "ogechi";
// const age = 30;
// const isAdmin = false;
// const x = null;
// const y = undefined;
// console.log(
//   "My  name  is " + firstname + " " + lastname + "i  Am " + age + "years  old"
// );
// console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
// console.log(firstname.toLowerCase());
// const title = "welcome, ICT, Laptop, Router";
// console.log(title.length);
// console.log(title.split(","));
// const students = ["Web", "Home", "kitchen", 6, true];
// students.unshift("computer");makes an item appear at the begining
// students.push("table", "pen");push adds to the items
// students.pop(); poping the last item out
// console.log(students);
const person = {
  Firstname: "Henry",
  Lastname: "Peter",
  score: 40.5,
  isAdmin: false,
  hobbies: ["cooking", "bet9ja", "boxing"],
  address: {
    city: "owerri",
    LGA: "Owerri municipal",
    postalCode: 46013,
  },
};
const { Firstname, Lastname } = person;
console.log(Firstname, Lastname);
// console.log(JSON.stringify(person));
