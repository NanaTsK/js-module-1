
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

let arr = [];

console.log(fillArray(2, 10));

function fillArray(min, max) {
    for (let i = min; i <= max; i += 2) {
      return arr.push(i)
    }
}
//* ++++++++++++++++++++++++++++++++++++++++++++
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
//* ++++++++++++++++++++++++++++++++++++++++++++

// повертає суму всіх цілих чисел від одиниці і до цього числа

function calculateTotal(number) {
let sum = 0;
for (let i = 0; i <= number; i += 1) {
  sum += i;
}
return sum
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

//* ++++++++++++++++++++++++++++++++++++++++++++

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

//* ++++++++++++++++++++++++++++++++++++++++++++

// Задача: обчислення суми покупки

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
// повертає 138
console.log(calculateTotalPrice([164, 48, 291]));
// повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// повертає 1116

//* ++++++++++++++++++++++++++++++++++++++++++++

function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


//* ++++++++++++++++++++++++++++++++++++++++++++

// Задача: пошук найдовшого слова

function findLongestWord(string) {
  
let longestWord = ""
 const array = string.split(" ");
  for (let i = 0; i < array.length; i += 1) {
    const currentWord = array[i];
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
}
return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// повертає jumped
console.log(findLongestWord("Google do a roll"));
// повертає Google
console.log(findLongestWord("May the force be with you"));
// повертає force


//* ++++++++++++++++++++++++++++++++++++++++++++


const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}



//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

