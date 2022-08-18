//////////// LHL Which School ///////////////

// const whichSchool = function (age) {
//   if (age < 13) {
//     return "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//     return "Secondary School";
//   } else {
//     return "Lighthouse Labs";
//   }
// };

// whichSchool(10);
// _____________________________________________________________________________________//

///////////// LHL Loopy Lighthouse ////////////

// let num = 201;

// for(let i = 100; i < num; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log("Loopy");
//   } else if (i % 3 === 0) {
//     console.log("Lighthouse");
//   } else if (i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else {
//     console.log(i);
//   }
// };

// let amounts = [61.00, 52.25, 112.99, 5.00];
// let total = 0;

// for (let amount of amounts) {
//   total += amount;
// }

// console.log('Order total is: ' + total);

///////////// REVISIT THIS WHEN FINISHED WITH PREP WORK TO TRY AGAIN WITHOUT AN AID ///////////////////////
// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// function chooseStations(stations) {
//   const goodStations = [];
//   for (const station of stations) {
//     const capacity = station[1];
//     //console.log(capacity);
//     if(capacity >= 20) {
//       //console.log(capacity);
//      goodStations.push(station[0])
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));

/////////////// COME BACK AND REVIEW THIS CODE SNIPPET FOR MOVING ON THE MAP //////////////////////

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

// const finalPosition = function (moves) {
//   let position = [0, 0]

//   for (let i of moves) {
//     if (i === 'west') {
//       position [0] --;
//     } else if (i === 'east') {
//       position [0] ++;
//     } else if (i === 'north') {
//       position [1] ++;
//     } else if (i === 'south') {
//       position[1] --;
//     }
//   }
//   return position;
// }

// console.log(finalPosition(moves));

////////////////////// AGE CALCULATOR //////////////////////////
// const age = function(name, birthYear, currentYear) {
//   return name + " is " + (currentYear - birthYear) + " years old.";
// }

// console.log(age("stephen", 1984, 2022));

/////////////// AREA CALCULATOR /////////////////////
// const rectangle = function (length, width) {
//   if (length < 0 || width < 0) {
//     return undefined;
//   } else {
//     return length * width;
//   }
// };

// const triangleArea = function (base, height) {
//   if (base < 0 || height < 0) {
//     return undefined;
//   } else {
//     return base * height / 2;
//   }
// };

// const circleArea = function (radius) {
//   if (radius < 0) {
//     return undefined;
//   } else {
//     return radius * radius * Math.PI;
//   }
// };

/////////// CODE SNIPPET TO SEE HOW MANY HUNDREDS ///////////////////
// const howManyHundreds = function(hundreds) {
//   return Math.floor(hundreds / 100);
//  }

//  console.log(howManyHundreds(894));

////////////////////// LOOPING RANGE USING FOR LOOP ////////////////////

// const range = function (start, end, step) {
//   let result = [];
//   if (step > 0) {
//     for (i = start; i <= end; i+= step) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 0));

//////////// GEWTTING THE LAST NUMBER IN THE ARRAY TO PRINT ////////////////////

// function lastIndexOf(array, num) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

///////////////// CONCAT 2 ARRAYS TOGETHER //////////////////

// const concat = function (array1, array2) {
//   let array3 = [];
//   array3 = array1.concat(array2);
//   return array3;
// }

// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);

// var myObj = {
//   color: "orange",
//   shape: "sphere",
//   type: "food",
//   eat: function() { return "yummy" }
// };

// myObj.color;

//////////// Trash to Treasure Quiz /////////////

// const smartGarbage = function (trash, bins) {
//   bins[trash] += 1;
//   return bins;
// }

// console.log(smartGarbage('compost', {waste: 10, recycling: 25, compost: 19}));

////////////////// DRIVING MAYOR DAISY //////////////////////

// const carPassing = function (cars, speed) {
//   // Your code in here ...
//   const carsArray = {
//     time: Date.now(),
//     speed: speed
//   }
//   cars.push(carsArray);
//   return cars;

// }

////////////// WE'RE ROOTING FOR YOU /////////////////

// const judgeVegetable = function (vegetables, metric) {
//   let value = 0;
//   let submitter = '';

//   for (let i = 0; i < vegetables.length; i++) {
//     if (value < vegetables[i][metric]) {
//       value = vegetables[i][metric];
//       submitter = vegetables[i].submitter;
//     }
//   }
//   return submitter;
// }

var shirtWidth = 18.75;
var shirtLength = 28.56;
var shirtSleeve = 8.25;

if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.37
) {
  console.log("S");
} else if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.37
) {
  console.log("M");
} else if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.37
) {
  console.log("L");
} else if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.37
) {
  console.log("XL");
} else if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.37
) {
  console.log("2XL");
}
