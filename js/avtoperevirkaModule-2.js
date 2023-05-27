
// Поверне рандомний фрукт із масиву
// Як отримати рандомне значення масиву
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple',];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);

//* ++++++++++++++++++++++++++++++++++++++++++++

// Slug => slugify
// для створення читабельних URL-адрес

function slugify(title) {
let string = title.toLowerCase().split(" ");
  return string.join("-")
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//* ++++++++++++++++++++++++++++++++++++++++++++

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }
//* ++++++++++++++++++++++++++++++++++++++++++++
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// повертає суму всіх цілих чисел від одиниці і до цього числа

// function calculateTotal(number) {
// let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//   sum += i;
// }
// return sum
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

//* ++++++++++++++++++++++++++++++++++++++++++++

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++

// Задача: обчислення суми покупки

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));
// // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// // повертає 1116

//* ++++++++++++++++++++++++++++++++++++++++++++

function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


//* ++++++++++++++++++++++++++++++++++++++++++++

// Задача: пошук найдовшого слова

// function findLongestWord(string) {
  
// let longestWord = ""
//  const array = string.split(" ");
//   for (let i = 0; i < array.length; i += 1) {
//     const currentWord = array[i];
//   if (currentWord.length > longestWord.length) {
//     longestWord = currentWord;
//   }
// }
// return longestWord;
// }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// повертає jumped
console.log(findLongestWord("Google do a roll"));
// повертає Google
console.log(findLongestWord("May the force be with you"));
// повертає force


//* ++++++++++++++++++++++++++++++++++++++++++++


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++

// Доповни код функції createArrayOfNumbers(min, max) таким чином, 
// щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

// for(let i = min; i <= max; i += 1)
//   numbers.push(i);
  
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// // повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17));
// // повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34));
// // повертає [29, 30, 31, 32, 33, 34]


//* ++++++++++++++++++++++++++++++++++++++++++++


// for (let i = 0; i < 6; i += 1) {
// console.log(i);
// }
 
//* ++++++++++++++++++++++++++++++++++++++++++++

// something duplicated

// const friends = ["aaa", "bbb", "ccc"];

// for (let i = 0, i < friends.length; i += 1) { 
//   friends[i] += "-1";
// }
// console.log(friends);

//* ++++++++++++++++++++++++++++++++++++++++++++

//  рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for of :

// 1. 
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }


// 2.
// function calculateTotalPrice(order) {
//   let total = 0;

// for (const object of order) {
//     total += object;
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]) );
// // повертає 138
// console.log( calculateTotalPrice([164, 48, 291]) );
// // повертає 503




//* ++++++++++++++++++++++++++++++++++++++++++++

//  фільтрація масиву чисел- 
// рефакторинг функції filterArray(numbers, value), замінивши цикл for на for of :

// 1.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }


2. 
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
}
    return filteredNumbers;
  
}

console.log( filterArray([1, 2, 3, 4, 5], 3) );
// повертає [4, 5]
console.log( filterArray([1, 2, 3, 4, 5], 5) );
// повертає []
console.log( filterArray([12, 24, 8, 41, 76], 38) );
// повертає [41, 76]


//* ++++++++++++++++++++++++++++++++++++++++++++


const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


//* ++++++++++++++++++++++++++++++++++++++++++++

// Напиши функцію getEvenNumbers(start, end), 
// яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

function getEvenNumbers(start, end) { 
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) { 
    if (i % 2 === 0) { 
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
console.log(evenNumbers);
}

console.log( getEvenNumbers(2, 5) );
// повертає [2, 4]
console.log( getEvenNumbers(6, 12) );
// повертає [6, 8, 10, 12]
console.log( getEvenNumbers(7, 7) );
// повертає []


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++

