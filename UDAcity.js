//var myString = "This is a string";

//for (var i = 0; i < myString.length; i++) {
//  console.log(myString.charCodeAt(i));
//}

//var anotherString = "THIS IS ANOTHER STRING EXAMPLE";

//for( var i = 0; i < anotherString.length; i++){
//  console.log(anotherString.charCodeAt(i));
//

//let number = 106;

//if (0 === number % 2) {
//  console.log("even")
//} else {
 // console.log("odd")
//};


// let room = 'ballroom';
// let suspect = 'Mr. Kalehoff';
// let weapon = '';
// let solved = false;

// if (room === 'ballroom' && suspect === "Mr. Kalehoff") {
//     weapon = "poison";
//     solved = true;
// } else if (room === 'gallery' && suspect === 'Ms. Van Cleve'){
//     weapon = "trophy";
//     solved = true;
// } else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
//     weapon = 'pool stick';
//     solved = true;
// } else if (room === 'dining room' && suspect === 'Mr. Parkes') {
//     weapon = 'knife';
//     solved = true;
// } else {
//   solved = false;
// };

// if (solved){
//   console.log(suspect + " did it in the " + room + " with the " + weapon + "!")
// };

// let balance = 0;
// let checkBalance = false;
// let isActive = false;

// if (checkBalance === true) {
  
//   if(isActive === true & balance > 0) {
//       console.log("your balance is $" + balance.toFixed(2) + ".")
//   } else if(isActive === true && balance === 0) {
//     console.log("Your account is empty");
//   } else if(isActive === false) {
//     console.log("Your account is no longer active.")
//   } else if(isActive === true && balance < 0) {
//     console.log("Your balance is negative. Please contact bank.")
//   } 
// }

// else {
//   console.log("Thank you. Have a nice day!")
// };


// let flavor = "chocolate";
// let vessel = "cone";
// let toppings = "peanuts";

// // using the || and the && to have only one expression statement
// if((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
//     console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
// }


// let shirtWidth = 19.99;
// let shirtLength = 28.99;
// let shirtSleeve = 8.379;

// if((shirtWidth >= 18 && shirtWidth <= 19.99) && (shirtLength >= 28 && shirtLength <= 28.99) && (shirtSleeve >= 8.13 && shirtSleeve <= 8.379)) {
//   console.log("S");
// }
// else if((shirtWidth >= 20 && shirtWidth <= 21.99) && (shirtLength >= 29 && shirtLength <=29.99) && (shirtSleeve >= 8.38 && shirtSleeve <= 8.629)) {
//   console.log("M")
// }
// else if((shirtWidth >= 22 && shirtWidth <= 23.99) && (shirtLength >=30 && shirtLength <= 30.99) && (shirtSleeve >= 8.63 && shirtSleeve <= 8.879)) {
//   console.log("L")
// }
// else if((shirtWidth >= 24 && shirtWidth <= 25.99) && (shirtLength >= 31 && shirtLength <= 32.99) && (shirtSleeve >= 8.88 && shirtSleeve <= 9.629)) {
//   console.log("XL")
// }
// else if((shirtWidth >= 26 && shirtWidth <= 27.99) && (shirtLength >= 33 && shirtLength <= 33.99) && (shirtSleeve >= 9.63 && shirtSleeve <= 10.129)) {
//   console.log("2XL")
// }
// else if((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)) {
//   console.log("3XL")
// } else {
//   console.log("NA")
// }

// let eatsPlants = false;
// let eatsAnimals = false;

// var category =  eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');
// console.log(category)


let education = "a Doctoral degree";
let salary = 0

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associates degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year");