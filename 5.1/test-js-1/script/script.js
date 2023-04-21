console.log("Hi, JS student!");
console.log("Hi, JS student1!");
console.log("Hi, JS student2!");
console.log("Hi, JS student3!");

let userName;
let anotherName;
let moreName;

userName = "Oksana";
anotherName = "Ivan";
// anotherName = userName; //some text

// some text
console.log(userName);
console.log(anotherName);

const BIRTH_DAY = "24.10.1985";
// BIRTH_DAY = "25.10.1985" //not possible

console.log(BIRTH_DAY);

var message;
message = "New message text";

console.log(message);

let age = 10;

let ageNewParticipant;
// don't use +?/=
// don't use -

// операторы - =, +
// операнды - age, 10, "text"

// унарный - 1 операнд
let amount = -10;

// бинарный - 2 операнда
let user = "Vasya";

// тернарный - 3 операнда
let balance = 100;
let penalty = balance < 0 ? 50 : 0;
console.log(penalty);

let numberType = 10;
let floatNumber = 10.76;
let stringType = "text";
let stringType2 = "text with \t continue";
let strinTypeAnother = 'another "text"';
console.log(stringType2);
let lightIsOn = true;
let d; //undefined
let nothing = null;
let cars = {
  first: "bmw",
  second: "lada",
  third: "vw",
};
let person = {
  age: 20,
  name: "Max",
  streetName: "Mayakowskogo",
};
const INCOME = [1000, 4500, 3000, 7654];
INCOME.push(1987);
console.log(INCOME);

let toDo = function () {};

let newName = "Oksana";
let surname = "Melnikova";
let fullName = newName + " " + surname;
console.log(`This is my fullname ${fullName} \u23E9.`);

let nameLength = newName.length;
let index = 5;
console.log(`The symbol for ${index} position is ${newName.charAt(index)}`);
console.log(`Length of the name is ${nameLength}`);

console.log(newName.toLowerCase());

console.log(newName < surname);

let myLuckyNumber = 16;
let floatNumber2 = 12.456788;

//Экранное время
let whatsapp = 50;
let fb = 25;
let inst = 90;
let spotify = 130;

let total = whatsapp + fb + inst + spotify;

console.log(total);
let averageTime = total / 4;
console.log(total / 4);

console.log(typeof total);
console.log(typeof averageTime);

console.log(Math.ceil(averageTime));
console.log(Math.floor(averageTime));
console.log(Math.ceil(averageTime));
console.log(Math.round(averageTime));
