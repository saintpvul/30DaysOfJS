// 1
let challenge = "30 Days Of JavaScript";

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(0, 2));

// 7
console.log(challenge.substring(3, 21));

// 8
console.log(challenge.includes("Script"));

// 9
console.log(challenge.split());

// 11
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(","));

// 12
console.log(challenge.replace("JavaScript", "Python"));

// 13
console.log(challenge.charAt(15));

// 14
console.log(challenge.charCodeAt("J"));

// 15
console.log(challenge.indexOf("a"));

// 16
console.log(challenge.lastIndexOf("a"));

// 17
let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));

// 18
console.log(because.lastIndexOf("because"));

// 19
console.log(because.search("because"));

// 20
console.log(challenge.trim(" "));

// 21
console.log(challenge.startsWith(30));

// 22
console.log(challenge.endsWith("Script"));

// 23
let challengeFindA = /a/gi;
console.log(challenge.match(challengeFindA));

// 24
let concatChallenge = "30 Days of ";
console.log(concatChallenge.concat("JavaScript"));

// 25
console.log(challenge.repeat(2));

// EXERCISE 2

// 1
let statement =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(statement);

// 2
let quote =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";

console.log(quote);
// 3
let equal = "10";
console.log(typeof equal);

// 4
let parse = 9.8;
let parseNum = Math.ceil(parse);
console.log(parseNum);

// 5
let isOn = ("python", "jargon");
console.log(isOn.includes("on"));

// 6
let jargon = "I hope this course is not full of jargon";

console.log(jargon.includes("jargon"));

// 7
let randomNum = Math.random();
let numToHundred = randomNum * 100;
let numToFloor = Math.floor(numToHundred);
console.log(numToFloor);

// 8
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(50, 100));

// 9
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(0, 255));

// 10
let string = "JavaScript";
let randomLetter = string[4];

console.log(randomLetter);

// 11
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

// 12
let subBecause =
  "You cannot end a sentence with because because because is a conjunction";
console.log(subBecause.substring(31, 54));

// EXERCISES 3

// 1
let count =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let countLove = /love/gi;
console.log(count.match(countLove));

// 2
let countB =
  "You cannot end a sentence with because because because is a conjunction";
let countBecause = /because/gi;
console.log(countB.match(countBecause));

// 3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^a-zA-Z , . ?]/g, ""));

// 4
const annualIncome =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
const numStr = annualIncome.match(/(\d+)/g);
console.log(numStr);
const a = parseInt(numStr[0]);
const b = parseInt(numStr[1]);
const c = parseInt(numStr[2]);
console.log((a + c) * 12 + b);
