// 1
console.log("1");
import { webTechs } from "./web_techs.js";
import { countries } from "./countries.js";
console.log("--------------");
console.log("webTechs");
console.log(webTechs);
console.log("--------------");
console.log("countries");
console.log(countries);
// 2
console.log("2");
console.log("--------------");
const textToStingCount =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const punctRemove = textToStingCount.replace(
  /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
  ""
);
const stringToArr = punctRemove.split(" ");
console.log(stringToArr);
console.log(stringToArr.length);
console.log("--------------");
// 3
console.log("3");
console.log("--------------");
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const exMeat = "Meat";
const exSugar = "Sugar";
const allergic = true;
if (
  shoppingCart.indexOf(exMeat) === -1 &&
  shoppingCart.indexOf(exSugar) === -1 &&
  allergic == true
) {
  shoppingCart.unshift(exMeat);
  shoppingCart.push(exSugar);
  shoppingCart.splice(4, 1);
  shoppingCart[3] = "Green Tea";
  console.log(shoppingCart);
} else {
  console.log(shoppingCart);
}
// 4
console.log("4");
console.log("--------------");
const exEthiopia = "Ethiopia";
const ethToUpperCase = exEthiopia.toUpperCase();
if (countries.includes(exEthiopia)) {
  console.log(ethToUpperCase);
} else {
  countries.shift(exEthiopia);
}
// 5
console.log("5");
console.log("--------------");

const exSass = "Sass";
if (webTechs.includes(exSass)) {
  console.log(exSass + " is a CSS preprocessor");
} else {
  webTechs.push(exSass);
  console.log(webTechs);
}
// 6
console.log("6");
console.log("--------------");
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullstack = [frontEnd, backEnd];
console.log(frontEnd + " frontend");
console.log(backEnd + " backend");
console.log(fullstack + " fullstack");

// EXERCISES LEVEL 3

console.log("--------------");
console.log("EX LVL 3");
console.log("--------------");

// 1

console.log("1");
console.log("--------------");
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
console.log(ages.length);
console.log("1.1");
console.log("--------------");
const sortAges = ages.sort();
console.log(sortAges);
console.log(sortAges.length);
const minAges = sortAges.shift();
const maxAges = sortAges.pop();
console.log("--------------SORT");
console.log(minAges);

console.log("--------------MIN AGES");
console.log(maxAges);

console.log("--------------MAX AGES");

console.log("--------------");
console.log("1.2");
console.log("--------------");
let inputLength = sortAges.length;
let middleIndex = Math.floor(inputLength / 2);
let oddLength = inputLength % 2 !== 0;
let median;
if (oddLength) {
  median = sortAges[middleIndex];
} else {
  median = (sortAges[middleIndex] + sortAges[middleIndex - 1]) / 2;
}
console.log(median);

console.log("--------------");
console.log("1.3");
console.log("--------------");
//  get avarage value
const avarage = sortAges.reduce((a, b) => a + b, 0) / inputLength;
console.log(avarage);

console.log("--------------");
console.log("1.4");
console.log("--------------");

const rangeAges = maxAges - minAges;
console.log(rangeAges);

console.log("--------------");
console.log("1.5");
console.log("--------------");

let min = Math.min(...sortAges);
let max = Math.max(...sortAges);
console.log(Math.abs(min - avarage));
console.log(Math.abs(max - avarage));

console.log("--------------");
console.log("1.5.1");
console.log("--------------");
const sliceCountries = countries.slice(0, 10);
console.log(sliceCountries);

console.log("--------------");
console.log("2");
console.log("--------------");

const midCountry = countries[Math.floor((countries.length - 1) / 2)];
console.log(midCountry);

console.log("--------------");
console.log("3");
console.log("--------------");
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
  const midIndx = Math.ceil(countries.length / 2);
  firstHalf = countries.splice(0, midIndx);
  secondHalf = countries.splice(-midIndx);

  console.log(firstHalf, secondHalf);
} else {
  const midIndx = Math.ceil(countries.length / 2) - 1;
  firstHalf = countries.splice(0, midIndx + 1);
  secondHalf = countries.splice(-midIndx);

  console.log(firstHalf, secondHalf);
}
