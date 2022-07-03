const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// Comparison Operators

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// Logical Operators

// && ampersand operator example

var check = 4 > 3 && 10 > 5; // true && true -> true
var check = 4 > 3 && 10 < 5; // true && false -> false
var check = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

var check = 4 > 3 || 10 > 5; // true  || true -> true
var check = 4 > 3 || 10 < 5; // true  || false -> true
var check = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check10 = 4 > 3; // true
let check11 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

// Increment Operator

// Pre-increment
let count1 = 0;
console.log(++count1); // 1
console.log(count1); // 1
// Post-increment
let count2 = 0;
console.log(count2++); // 0
console.log(count2);

//Decrement Operator

// Pre-decrement
let count3 = 0;
console.log(--count3); // -1
console.log(count3); // -1
// Post-decrement
let count4 = 0;
console.log(count4--); // 0
console.log(count4); // -1

// Ternary Operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
// You need a rain coat.
// No need for a rain coat.
let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
// 5 is a positive number
// -5 is a negative number

// Window prompt() method

let numberPrompt = prompt("Enter number", "number goes here");
console.log(number);

// Window confirm() method

const confirmAgree = confirm("Are you sure you like to delete? ");
console.log(confirmAgree); // result will be true or false based on what you click on the dialog box

// Date Object

// time obj
const now1 = new Date();
console.log(now1);

// full year
const now2 = new Date();
console.log(now2.getFullYear()); // 2020

// month
const now3 = new Date();
console.log(now3.getMonth());

// date
const now4 = new Date();
console.log(now4.getDate());

// day
const now5 = new Date();
console.log(now5.getDay()); // 6, because the day is Saturday which is the 7th day
/*  Sunday is 0, Monday is 1 and Saturday is 6
 Getting the weekday as a number (0-6) */

// hours
const now6 = new Date();
console.log(now6.getHours()); // 0, because the time is 00:56:41

// minutes
const now7 = new Date();
console.log(now7.getMinutes()); // 56, because the time is 00:56:41

// seconds
const now8 = new Date();
console.log(now8.getSeconds()); // 41, because the time is 00:56:41

// time
const now9 = new Date(); //
console.log(now9.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const allSeconds1 = Date.now(); //
console.log(allSeconds1); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(allSeconds1 == timeInSeconds); // true

// human readable time format
const now0 = new Date();
const year0 = now0.getFullYear(); // return year
const month0 = now0.getMonth() + 1; // return month(0 - 11)
const date0 = now0.getDate(); // return date (1 - 31)
const hours0 = now0.getHours(); // return number (0 - 23)
const minutes0 = now0.getMinutes(); // return number (0 -59)

console.log(`${date0}/${month0}/${year0} ${hours0}:${minutes0}`); // 4/1/2020 0:56

// EXERCISES 1
// 1
const firstName = "Paul";
const lastName = "Shvets";
const country = "Kazakhstan";
const city = "Almaty";
const age = 27;
const isMarried0 = true;
const year = new Date();
console.log(
  `${firstName} ${lastName} ${country} ${city} ${age} ${isMarried0} ` +
    year.getFullYear()
);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried0);
console.log(typeof year);

// 2
