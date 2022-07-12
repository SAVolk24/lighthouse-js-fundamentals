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


// let education = "a Doctoral degree";
// let salary = 0

// switch (education) {
//   case "no high school diploma":
//     salary = 25636;
//     break;
//   case "a high school diploma":
//     salary = 35256;
//     break;
//   case "an Associates degree":
//     salary = 41496;
//     break;
//   case "a Bachelor's degree":
//     salary = 59124;
//     break;
//   case "a Master's degree":
//     salary = 69732;
//     break;
//   case "a Professional degree":
//     salary = 89960;
//     break;
//   case "a Doctoral degree":
//     salary = 84396;
//     break;
// }

// console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year");

/////////////////////// LOOOOOOOOOOOOOPS ////////////////////


// var start = 0; // when to start
// while (start < 10) { // when to stop
//   console.log(start);
//   start = start + 2; // how to get to the next item
// }

// var x = 21;

// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("JuliaJames");
//   } else if (i % 3 === 0) {
//     console.log("Julia");
//   } else if (i % 5 === 0) {
//     console.log("James");
//   } else {
//     console.log(i);
//   }
// };

///////////// While Loop variation of FizzBuzz ///////////////
// var x = 1;
// while (x < 21) {
//   if (x % 3 === 0 && x % 5 ===0) {
//     console.log("JuliaJames");
//   } else if (x % 3 === 0) {
//     console.log("Julia");
//   } else if (x % 5 === 0) {
//     console.log("James");
//   } else {
//     console.log(x)
//   }
//   x++
// }


/////////////// While loop for 99 bottles of beer ///////////////
// var num = 99;

// while (num >= 1) {
//   if (num === 1) {
//     console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
//   } else if (num === 2) {
//     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
//   } else {
//     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down pass it around... " + (num - 1) + " bottles of juice on the wall!");
//   }
//   num = num - 1;
// }

    // var seconds = 60;

    // while (seconds >= 0) {
    //   if (seconds === 50) {
    //     console.log("Orbiter transfers from ground to internal power");
    //   } else if (seconds === 31) {
    //     console.log("Ground launch sequencer is go for auto sequence start");
    //   } else if ( seconds === 16) {
    //     console.log("Activate launch pad sound suppression system");
    //   } else if (seconds === 10) {
    //     console.log("Activate main engine hydrogen burnoff system");
    //   } else if (seconds === 6) {
    //     console.log("Main engine start");
    //   } else if (seconds === 0) {
    //     console.log("Solid rocket booster ignition and liftoff!")
    //   } else {
    //     console.log("T-"+seconds+" seconds");
    //   }
    //   seconds = seconds - 1;
    // }

    ////////////////// FOR LOOP EXAMPLE //////////////////

    // for (var x = 9; x >= 1; x--) {
    //   console.log("hello " + x);
    // }

    //let solution = 1; // delcare solution and set it to = 1

    //for(let i = 1; i <= 12; i++) {       // For Loop takes the solution variable and as long as i which is set to 1 is less or equal to 5 it keeps adding one
    //  solution *= i;                    // now it takes solution and multiples it by i
    //}

    //console.log(solution);              // log the solution

    for (let i = 0; i <= 6; i += 2) {
      console.log(i);
    }