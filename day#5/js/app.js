const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);
const fruits1 = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits1[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits1[1];
console.log(secondFruit); // orange

let lastFruit = fruits1[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits1.length - 1;
lastFruit = fruits1[lastIndex];

console.log(lastFruit); // lemon

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers1.length); // => to know the size of the array, which is 6
console.log(numbers1); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0]); //  -> 0
console.log(numbers1[5]); //  -> 100

let lastIndex1 = numbers1.length - 1;
console.log(numbers1[lastIndex1]); // -> 100

console.log("11111111111111");
const webTechs1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs1); // all the array items
console.log(webTechs1.length); // => to know the size of the array, which is 7
console.log(webTechs1[0]); //  -> HTML
console.log(webTechs1[6]); //  -> MongoDB

let lastIndex2 = webTechs1.length - 1;
console.log(webTechs1[lastIndex2]); // -> MongoDB

console.log("11111111111111");
console.log("11111111111111");
const countries11 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]; // List of countries

console.log(countries11); // -> all countries in array
console.log(countries11[0]); //  -> Albania
console.log(countries11[10]); //  -> Kenya

let lastIndex3 = countries11.length - 1;
console.log(countries11[lastIndex3]); //  -> Kenya

console.log("11111111111111");
console.log("11111111111111");
console.log("11111111111111");
const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
]; // List of food products

console.log(shoppingCart); // -> all shoppingCart in array
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[7]); //  -> Sugar

let lastIndex221 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex221]); //  -> Sugar
console.log("11111111111111");
console.log("11111111111111");
console.log("11111111111111");
console.log("11111111111111");
console.log("11111111111111");
console.log("11111111111111");
const numbers221 = [1, 2, 3, 4, 5];
numbers221[0] = 10; // changing 1 at index 0 to 10
numbers221[1] = 20; // changing  2 at index 1 to 20

console.log(numbers221); // [10, 20, 3, 4, 5]

const countries12 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries12[0] = "Afghanistan"; // Replacing Albania by Afghanistan
let lastIndex11 = countries12.length - 1;
countries12[lastIndex11] = "Korea"; // Replacing Kenya by Korea

console.log(countries);
console.log("11111111111111");
console.log("Array:To create an array.");

const array12213 = Array(); // creates an an empty array
console.log(array12213);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]
console.log("11111111111111");
console.log("fill: Fill all the array elements with a static value");

const array12212 = Array(); // creates an an empty array
console.log(array12212);

const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]

console.log("11111111111111");
console.log("concat:To concatenate two arrays.");

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

const fruitsConcat = ["banana", "orange", "mango", "lemon"]; // array of fruits
const vegetablesConcat = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
const fruitsAndVegetables = fruitsConcat.concat(vegetablesConcat); // concatenate the two arrays

console.log(fruitsAndVegetables);

console.log("11111111111111");
console.log("Length:To know the size of the array.");

const numbers331 = [1, 2, 3, 4, 5];
console.log(numbers331.length); // -> 5 is the size of the array

console.log("11111111111111");
console.log(
  "indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1."
);

const numbers22 = [1, 2, 3, 4, 5];

console.log(numbers22.indexOf(5)); // -> 4
console.log(numbers22.indexOf(0)); // -> -1
console.log(numbers22.indexOf(1)); // -> 0
console.log(numbers22.indexOf(6)); // -> -1

console.log("11111111111111");
console.log("Check an element if it exist in an array. Check items in a list");

const fruits22 = ["banana", "orange", "mango", "lemon"];
let index = fruits22.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does exist in the array

// we can use also ternary here
index === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// let us check if an avocado exist in the array
let indexOfAvocado = fruits22.indexOf("avocado"); // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does not exist in the array

console.log("11111111111111");
console.log(
  "lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1."
);

const numbers33 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers33.lastIndexOf(2)); // 7
console.log(numbers33.lastIndexOf(0)); // -1
console.log(numbers33.lastIndexOf(1)); //  6
console.log(numbers33.lastIndexOf(4)); //  3
console.log(numbers33.lastIndexOf(6)); // -1

console.log("11111111111111");
console.log(
  "includes:To check if an item exist in an array. If it exist it returns the true else it returns false."
);

const numbers44 = [1, 2, 3, 4, 5];

console.log(numbers44.includes(5)); // true
console.log(numbers44.includes(0)); // false
console.log(numbers44.includes(1)); // true
console.log(numbers44.includes(6)); // false

let string = "HTML";
const webTechs14 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs14.includes(string)); // true
console.log(webTechs14.includes("C")); // false

console.log("11111111111111");
console.log("Array.isArray:To check if the data type is an array");

const numbersArr = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersArr)); // true

const numberFalse = 100;
console.log(Array.isArray(numberFalse)); // false

console.log("11111111111111");
console.log("toString:Converts array to string");

const numbersTS = [1, 2, 3, 4, 5];
console.log(numbersTS.toString()); // 1,2,3,4,5

const namesTS = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(namesTS.toString()); // Asabeneh,Mathias,Elias,Brook

console.log("11111111111111");
console.log(
  "join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items."
);
const numbersJoin = [1, 2, 3, 4, 5];
console.log(numbersJoin.join()); // 1,2,3,4,5

const namesJoin = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(namesJoin.join()); // Asabeneh,Mathias,Elias,Brook
console.log(namesJoin.join("")); //AsabenehMathiasEliasBrook
console.log(namesJoin.join(" ")); //Asabeneh Mathias Elias Brook
console.log(namesJoin.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(namesJoin.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const webTechsJoin = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechsJoin.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechsJoin.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

console.log("11111111111111");
console.log(
  "Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position."
);
const numbersSlice = [1, 2, 3, 4, 5];

console.log(numbersSlice.slice()); // -> it copies all  item
console.log(numbersSlice.slice(0)); // -> it copies all  item
console.log(numbersSlice.slice(0, numbersSlice.length)); // it copies all  item
console.log(numbersSlice.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

console.log("11111111111111");
console.log(
  "Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added."
);
const numbersSplice1 = [1, 2, 3, 4, 5];
numbersSplice1.splice();

console.log(numbersSplice1); // -> remove all items

const numbersSplice2 = [1, 2, 3, 4, 5];
numbersSplice2.splice(0, 1);

console.log(numbersSplice2); // remove the first item

const numbersSplice3 = [1, 2, 3, 4, 5, 6];
numbersSplice3.splice(3, 3, 7, 8, 9);

console.log(numbersSplice3.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

console.log("11111111111111");
console.log(
  "Push: adding item in the end. To add item to the end of an existing array we use the push method."
);

// syntax
const arrPush0 = ["item1", "item2", "item3"];
arrPush0.push("new item");
console.log(arrPush0);
// ['item1', 'item2','item3','new item']
const numbersPush0 = [1, 2, 3, 4, 5];

numbersPush0.push(6);
console.log(numbersPush0); // -> [1,2,3,4,5,6]

numbersPush0.pop(); // -> remove one item from the end
console.log(numbersPush0); // -> [1,2,3,4,5]

let fruitsPush0 = ["banana", "orange", "mango", "lemon"];
fruitsPush0.push("apple");
console.log(fruitsPush0); // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruitsPush0.push("lime");
console.log(fruitsPush0); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

console.log("11111111111111");
console.log("pop: Removing item in the end.");

const numbersPop = [1, 2, 3, 4, 5];
numbersPop.pop(); // -> remove one item from the end

console.log(numbersPop); // -> [1,2,3,4]

console.log("11111111111111");
console.log("shift: Removing one array element in the beginning of the array.");

const numbersShift = [1, 2, 3, 4, 5];
numbersShift.shift(); // -> remove one item from the beginning
console.log(numbersShift); // -> [2,3,4,5]

console.log("11111111111111");
console.log("unshift: Adding array element in the beginning of the array.");

const numbersUnshift = [1, 2, 3, 4, 5];
numbersUnshift.unshift(0); // -> add one item from the beginning
console.log(numbersUnshift); // -> [0,1,2,3,4,5]

console.log("11111111111111");
console.log("reverse: reverse the order of an array.");

const numbersReverse = [1, 2, 3, 4, 5];
numbersReverse.reverse(); // -> reverse array order
console.log(numbersReverse); // [5, 4, 3, 2, 1]

numbersReverse.reverse();
console.log(numbersReverse); // [1, 2, 3, 4, 5]

console.log("11111111111111");
console.log(
  "sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections."
);

const webTechsSort = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechsSort.sort();
console.log(webTechsSort); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechsSort.reverse(); // after sorting we can reverse it
console.log(webTechsSort); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

console.log("11111111111111");
console.log("Array of arrays");

const firstNumsAA = [1, 2, 3];
const secondNumsAA = [1, 4, 9];

const arrayOfArrayAA = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArrayAA[0]); // [1, 2, 3]

const frontEndAA = ["HTML", "CSS", "JS", "React", "Redux"];
const backEndAA = ["Node", "Express", "MongoDB"];
const fullStackAA = [frontEndAA, backEndAA];
console.log(fullStackAA); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStackAA.length); // 2
console.log(fullStackAA[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStackAA[1]); // ["Node", "Express", "MongoDB"]

// EXERCISES 1
// 1
// 1
const exArr = Array();
// 2
const exNumArr = [1, 2, 3, 4, 5, 6];
// 3
console.log(exNumArr.length);
// 4
const exNum1 = exNumArr[0];
const exNum2 = exNumArr[2];
const exNum3 = exNumArr[5];
console.log(exNum1, exNum2, exNum3);
// 5
const mixedDataTypes = [
  1,
  "str",
  false,
  { state: "Washington", city: "Seattle" },
  { weather: ["Snow", "Rain", "Cloudy", "Storm"] },
];
console.log(mixedDataTypes.length);
// 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7
console.log(itCompanies);
// 8
console.log(itCompanies.indexOf("Facebook") + " Facebook");
console.log(itCompanies.indexOf("Google") + " Google");
console.log(itCompanies.indexOf("Microsoft") + " Microsoft");
console.log(itCompanies.indexOf("Apple") + " Apple");
console.log(itCompanies.indexOf("IBM") + " IBM");
console.log(itCompanies.indexOf("Oracle") + " Oracle");
console.log(itCompanies.indexOf("Amazon") + " Amazon");
// 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
// 10
console.log(
  itCompanies[0] +
    " " +
    itCompanies[1] +
    " " +
    itCompanies[2] +
    " " +
    itCompanies[3] +
    " " +
    itCompanies[4] +
    " " +
    itCompanies[5] +
    " " +
    itCompanies[6]
);
// 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// 12
console.log(itCompanies.toString());
// 13
itCompanies ? "not found" : itCompanies;
// 14
