//* -----------------------------------

function greet(name) {
  return `Ласкаво просимо, ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Манго")); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet);
// ƒ greet() { return `Ласкаво просимо ${name}.`; }


//* -----------------------------------

// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);


//* -----------------------------------

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

//* -----------------------------------

function processCall(recipient) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
}

processCall("Манго");

//* -----------------------------------
function repeatLog(n) {
  for (let i = 1; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);


//* -----------------------------------
function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2


//* -----------------------------------

// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

//* -----------------------------------

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

//* -----------------------------------
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
  
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);


// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(student => student.score >= LOW_SCORE && student.score < HIGH_SCORE);
// console.log(average);

//* -----------------------------------

const mySet = new Set([1, 2, 1, 4, 3, 2]);
const result = [...mySet];
console.log(result);
// result will be Array [1, 2, 4, 3]

//* -----------------------------------

//** SORT */ sort()
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);
// // [2, 27, 3, 4, 41, 7, 75]
//* -----------------------------------

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters);
// ['A', 'B', 'C', 'a', 'b', 'c']

//* -----------------------------------

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//* -----------------------------------
/*
 * compareFunction(a, b) - для зазначення свого порядку сортування
 */

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//* -----------------------------------
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//* -----------------------------------
/*
 * localeCompare() - метод рядків для сортування рядків в алфавітному порядку, за зростанням або спаданням 
 */

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);
// // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);
// // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

//* -----------------------------------
/*
 * Сортування об'єктів 
 */

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);
// [ { name: 'Аякс', score: 37 },
//   { name: 'Полі', score: 59 },
//   { name: 'Манго', score: 83 },
//   { name: 'Ківі', score: 94 } ]

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);
//[ { name: 'Ківі', score: 94 },
  // { name: 'Манго', score: 83 },
  // { name: 'Полі', score: 59 },
  // { name: 'Аякс', score: 37 } ]

const inAlphabeticalOrder = students.sort(
  (firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder);
// [ { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 } ]

const inReversedOrder = students.sort(
  (firstStudent, secondStudent) =>
  secondStudent.name.localeCompare(firstStudent.name)
);
console.log(inReversedOrder);
// [ { name: 'Полі', score: 59 },
//   { name: 'Манго', score: 83 },
//   { name: 'Ківі', score: 94 },
//   { name: 'Аякс', score: 37 }]
  
//* -----------------------------------
