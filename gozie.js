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
// const person = {
//   Firstname: "Henry",
//   Lastname: "Peter",
//   score: 40.5,
//   isAdmin: false,
//   hobbies: ["cooking", "bet9ja", "boxing"],
//   address: {
//     city: "owerri",
//     LGA: "Owerri municipal",
//     postalCode: 46013,
//   },
// };
// console.log(person.address.city);
// const { Firstname, Lastname } = person;
// // console.log(JSON.stringify(person));
// const cartitems = [
//   {
//     id: 1,
//     productName: "Sugar",
//     quantity: 5,
//     ispaid: false,
//     category: "Beverages",
//     price: 1000,
//   },
//   {
//     id: 2,
//     productName: "Fridge",
//     quantity: 2,
//     ispaid: false,
//     category: "Electronics",
//     price: 1000,
//   },
//   {
//     id: 3,
//     productName: "Milk",
//     quantity: 5,
//     ispaid: true,
//     category: "Beverages",
//     price: 1000,
//   },
//   {
//     id: 4,
//     productName: "Milo",
//     quantity: 5,
//     ispaid: false,
//     category: "Beverages",
//     price: 2000,
//   },
// ];
// console.log(cartitems);

// for loops
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }
// while loop
// let i = 0;
// while (i <= 25) {
//   console.log(`This is the loop of ${i}`);
//   i++;
// }

// const cartitems = [
//   {
//     id: 1,
//     productName: "Sugar",
//     quantity: 5,
//     ispaid: false,
//     category: "Beverages",
//     price: 1000,
//   },
//   {
//     id: 2,
//     productName: "Fridge",
//     quantity: 2,
//     ispaid: false,
//     category: "Electronics",
//     price: 1000,
//   },
//   {
//     id: 3,
//     productName: "Milk",
//     quantity: 5,
//     ispaid: true,
//     category: "Beverages",
//     price: 1000,
//   },
//   {
//     id: 4,
//     productName: "Milo",
//     quantity: 5,
//     ispaid: false,
//     category: "Beverages",
//     price: 2000,
//   },
// ];
// (for loop)

// for (let i = 0; i <= cartitems.length; i++) {
//   console.log(cartitems[i].productName);
// }
// (while loop)

// let i = 0;
// while (i <= cartitems.length) {
//   console.log(cartitems[i].category);
//   i++;
// }
// (for loop)

// for (items of cartitems) {
//   console.log(items.productName);
// }
// (for each looping)

// cartitems.forEach(function (items) {
//   console.log(items.productName);
// });

// (map looping)

// const store = cartitems.map(function (listitems) {
//   return listitems.productName;
// });
// console.log(store);

// (filter looping)

// const store = cartitems.filter(function (listitems) {
//   return listitems.ispaid === true;
// });
// console.log(store);

// Mapping tru it

// const store = cartitems
//   .filter(function (listitems) {
//     return listitems.ispaid === false;
//   })
//   .map(function (listitems) {
//     return listitems.productName;
//   });
// console.log(store);

// Example
// const store = cartitems
//   .filter(function (listitems) {
//     return listitems.price === 1000;
//   })
//   .map(function (listitems) {
//     return listitems.productName;
//   });
// console.log(store);
