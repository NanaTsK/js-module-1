

//* ++++++++++++++++++++++++++++++++++++++++++++

//  How to find the common elements between two or more arrays

  function getCommonElements(array1, array2) {
  // Create an empty array to store the common elements
  let commonElements = [];

  // Iterate through each element of the first array
  for (let i = 0; i < array1.length; i++) {
    let currentElement = array1[i];

    // Check if the current element exists in the second array
    if (array2.includes(currentElement)) {
      // Add the common element to the commonElements array
      commonElements.push(currentElement);
    }
  }

  // Return the array containing the common elements
  return commonElements;
}
console.log( getCommonElements([1, 2, 3], [2, 4]) );
// повертає [2]
console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]) );
// повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


//* ++++++++++++++++++++++++++++++++++++++++++++

// ЗАМЕНЯЕТ РЕГИСТР КАЖДОГО СИМВОЛА В СТРОКЕ НА ПРОТИВОПОЛОЖН.


const string = "HatunaLuna";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {
    console.log(letter);
    
    // if (letter === letter.toLowerCase()) {
    //     console.log("эта буква в нижнем регистре - ", letter);

    //     invertedString += letter.toUpperCase();
    // }
    // else (invertedString += letter.toLowerCase());


    // invertedString += letter === letter.toLowerCase()
    //     ? letter.toUpperCase() : letter.toLowerCase();
    
    // ИЛИ
    const isEqual = letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();


}
console.log("Inverted String: ", invertedString)


// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++

const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

//* ++++++++++++++++++++++++++++++++++++++++++++

// CONVERT STRING TO SLUG

const title = "The Top 10 Most Popular TV Shows on Netflix";

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const splitTitle = normalizedTitle.split(" ")
console.log(splitTitle);

const slug1 = splitTitle.join("-");
console.log(slug1);

// ИЛИ
// декларативный код (абстракция):

const slug2 = title.toLowerCase().split(" ").join("-");
console.log(slug2);

//* ++++++++++++++++++++++++++++++++++++++++++++

// СУММА ДВУХ или более МАССИВОВ :

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array3 = [3, 6, 9]
let total = 0

const numbers = array1.concat(array2, array3, [1, 2, 3]);
console.log(numbers);

for (const number of numbers) {
    total += number; 
}
console.log(total)

//* ++++++++++++++++++++++++++++++++++++++++++++

// КОЛЛЕКЦИЯ КАРТОЧЕК (напр. trello) :
//* Метод Splice - деструктивный
// Удалить 
// Добавить
// Обновить

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
console.table(cards);

/*
 * удаление по индексу, метод indexOf()
 */
// const cardToRemove = "Card-3";
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);
// console.log(cards);


/*
 * добавление по индексу
 */
// const cardToInsert = "Card-6";
// const index = 3
// cards.splice(3, 0, cardToInsert);
// console.log(cards);

/*
 * обновление по индексу
 */
const cardToUpdate = "Card-4";
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(3, 1, "обновленная карточка-4");
console.table(cards);



//* ++++++++++++++++++++++++++++++++++++++++++++
