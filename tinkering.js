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

