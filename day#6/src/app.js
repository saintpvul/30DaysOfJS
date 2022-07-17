let numberArr = [11, 12, 13, 14, 15];
let newNumberArr = [];
let sumNumberArr = 0;
for (let i = 0; i < numberArr.length; i++) {
  newNumberArr.push(numberArr[i] ** 2);
}
console.log(newNumberArr);

let stringArr = [
  "String 1",
  "String 2",
  "String 3",
  "String 4",
  "String 5",
  "String 6",
];
let newstringArr = [];
for (let i = 0; i < stringArr.length; i++) {
  newstringArr.push(stringArr[i].toUpperCase());
}
console.log(newstringArr);

// while loop

let iZeroTen = 0;
while (iZeroTen <= 10) {
  console.log(iZeroTen);
  iZeroTen++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// loop end
console.log(" ====================");
let element = [1, 2, 3, 4, 5];
for (let num of element) {
  console.log(num);
}

console.log(" ====================");
for (let num of element) {
  console.log(num * num);
}
console.log(" ====================");
let sumOfElement = 0;
for (let num of element) {
  sumOfElement = sumOfElement + num;
}
console.log(sumOfElement);
console.log(" ====================");
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}
console.log(" ====================");
for (const tech of webTechs) {
  console.log(tech[0]);
}
console.log(" ====================");

const countries = ["Kazakhstan", "Kyrgiztan", "Belorus", "Azerbaijan"];
const newCountry = [];
for (const country of countries) {
  newCountry.push(country.toUpperCase());
}
console.log(newCountry);
console.log(" ====================");
// break
for (let i = 0; i <= 20; i++) {
  if (i == 14) {
    break;
  }
  console.log(i);
}

console.log(" ====================");

for (let i = 0; i <= 7; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

console.log(" ==================== ex 1.1");
for (i = 0; i <= 10; i++) {
  console.log(i);
}
console.log(" ====================");
let iToTen = 0;
while (iToTen <= 10) {
  console.log(iToTen);
  iToTen++;
}
console.log(" ====================");
let toTen = 0;
do {
  console.log(toTen);
  toTen++;
} while (toTen <= 10);
console.log(" ==================== ex 1.2");
for (i = 10; i >= 0; i--) {
  console.log(i);
}
console.log(" ====================");
let iToNull = 10;
while (iToNull >= 0) {
  console.log(iToNull);
  iToNull--;
}
console.log(" ====================");
let toNull = 10;
do {
  console.log(toNull);
  toNull--;
} while (toNull >= 0);

console.log(" ==================== ex 1.3");
let n = 11;
for (i = 0; i <= n; i++) {
  console.log(i);
}

console.log(" ==================== ex 1.4");
let str = "#";
for (i = 0; i <= 7; i++) {
  console.log(str.repeat(i));
}
