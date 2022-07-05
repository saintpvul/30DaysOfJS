// Exercises 1
// 1
const userAge = prompt("Enter your age: ");
const userAgeToNum = Number(userAge);
if (userAgeToNum >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("You are left with " + (18 - userAgeToNum) + " years to drive.");
}
// 2
const myAge = prompt("My age is: ");
const yourAge = prompt("Enter your age: ");
const myAgeNum = Number(myAge);
const yourAgeNum = Number(yourAge);
if (myAgeNum > yourAgeNum) {
  console.log("You are " + (myAgeNum - yourAgeNum) + " years younger than me.");
} else if (myAgeNum < yourAgeNum) {
  console.log("You are " + (yourAgeNum - myAgeNum) + " years older than me.");
} else if (myAgeNum === yourAgeNum) {
  console.log("You and i are " + myAgeNum + ". We are peers.");
} else {
  console.log("This is not age.");
}
// 3
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
b ? console.log("a is less than b lol") : console.log("a is grater than b");
// 4
const evenOdd = prompt("Enter a number: ");
const evenOddNum = Number(evenOdd);
if (evenOddNum % 2 == 0) {
  console.log(evenOddNum + " is an even number.");
} else {
  console.log(evenOddNum + " is an odd number");
}
// Exercises 2
// 1
const score = prompt("Your score: ");
const scoreNum = Number(score);
if (scoreNum >= 80 && scoreNum <= 100) {
  console.log("Your score is " + scoreNum + ". Your grade is A");
} else if (scoreNum >= 70 && scoreNum <= 89) {
  console.log("Your score is " + scoreNum + ". Your grade is B");
} else if (scoreNum >= 60 && scoreNum <= 69) {
  console.log("Your score is " + scoreNum + ". Your grade is C");
} else if (scoreNum >= 50 && scoreNum <= 59) {
  console.log("Your score is " + scoreNum + ". Your grade is D");
} else if (scoreNum >= 0 && scoreNum <= 49) {
  console.log("Your score is " + scoreNum + ". Your grade is F");
} else {
  console.log("You have no grade. You are out!");
}
// 2
const monthInput = prompt("Enter current month: ");
const month = monthInput.toLowerCase();
const notMonth = monthInput.toLocaleUpperCase();
const autumn = ["september", "october", "november"];
const winter = ["december", "january", "february"];
const spring = ["march", "april", "may"];
const summer = ["june", "july", "august"];
if (month === autumn) {
  console.log("The Season is Autumn");
} else if (month === winter) {
  console.log("The Season is Winter");
} else if (month === spring) {
  console.log("The Season is Spring");
} else if (month === summer) {
  console.log("The Season is Summer");
} else {
  console.log("I don't get it. Is " + notMonth + " a month ?");
}
// !CAN'T ASSIGN MULTIPLE VALUES TO VAR
