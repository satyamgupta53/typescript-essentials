// this defines tuple, with specific order of string (0), number (1), boolean (2)
let userInformation: [string, number, boolean];
userInformation = ["satyam", 1234567890, true];

// but, overriding is possible in typescript, unlike python
userInformation.push(false); // manipulation is possible, therefore, use const to declare

// enums are good for restricted choices, use const keyword to declare
const enum SeatChoice {
  AISLE = "aisle",
  WINDOW = "window",
  MIDDLE = "middle",
}

const mySeat = SeatChoice.AISLE;
console.log(mySeat); // returns "aisle" 

export {};