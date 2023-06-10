//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 1


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza));
// //повертає рядок "Delivering Ultracheese pizza."

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) { 
//     console.log(`Eating pizza ${pizzaName}`)
// });


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 4

//   const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//       if (!pizzaPalace.pizzas.includes(pizzaName)) { 
//           return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//         return onSuccess(pizzaName);
//   },
//   };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 5 - перебирання масиву, forEach

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }
    
//     orderedItems.forEach(function (item, index) {
//             totalPrice += orderedItems[index];
//     });
//     //*АБО
//     //  orderedItems.forEach(function (number) {
//     //     totalPrice += number;
//     //   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log( calculateTotalPrice([12, 85, 37, 4]));
// //повертає 138
// console.log( calculateTotalPrice([164, 48, 291]));
// //повертає 503
// console.log( calculateTotalPrice([412, 371, 94, 63, 176]));
// //повертає 1116


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 6 - Фільтрація масиву чисел

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//     //* was:
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > value) {
// //       filteredNumbers.push(numbers[i]);
// //     }
// //   }
//     //* became:

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number)
//         }    });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log( filterArray ([1, 2, 3, 4, 5], 3));
// //повертає [4, 5]
// console.log( filterArray([1, 2, 3, 4, 5], 4));
// //повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// //повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// //повертає [24, 41, 76]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 7 - Спільні елементи

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//         //* was:
// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //   }
//         //* became:

//     firstArray.forEach(function (item, index)  {
//           if (secondArray.includes(firstArray[index])) {
//       commonElements.push(firstArray[index]);
//     }
//     });
  

//   return commonElements;
//   // Change code above this line
// }


// console.log( getCommonElements([1, 2, 3], [2, 4]) ); //повертає [2]
// console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// //повертає [1, 2]
// console.log( getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// //повертає [12, 27, 3]
// console.log( getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// //повертає [10, 30, 40]
// console.log( getCommonElements([1, 2, 3], [10, 20, 30]));
// //повертає []



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 8

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// console.log( calculateTotalPrice(5, 100));
// //повертає 500
// console.log( calculateTotalPrice(8, 60));
// //повертає 480
// console.log( calculateTotalPrice(3, 400));
// //повертає 1200


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => 
//      quantity * pricePerItem;
// // Change code above this line


// console.log( calculateTotalPrice(5, 100));
// //повертає 500
// console.log( calculateTotalPrice(8, 60));
// //повертає 480
// console.log( calculateTotalPrice(3, 400));
// //повертає 1200

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 10

// // Change code below this line
//     //* was
// //     function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

//     //* became

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);
//   return totalPrice;
// }
// // Change code above this line


// console.log( calculateTotalPrice([12, 85, 37, 4])); 
// //повертає 138
// console.log( calculateTotalPrice([164, 48, 291]));
// //повертає 503
// console.log( calculateTotalPrice([412, 371, 94, 63, 176]));
// //повертає 1116

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 11 - Фільтрація масиву чисел  

// // Change code below this line
//     //* was
// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });
//     //* became

//     const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
        
//   // Change code above this line
//   return filteredNumbers;
// }

// console.log( filterArray([1, 2, 3, 4, 5], 3));
// //повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// //повертає [5]
// console.log( filterArray([1, 2, 3, 4, 5], 5));
// //повертає []
// console.log( filterArray([12, 24, 8, 41, 76], 38));
// //повертає [41, 76]
// console.log( filterArray([12, 24, 8, 41, 76], 20));
// //повертає [24, 41, 76]


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 12 - Спільні елементи

// // Change code below this line
//   //* was
// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];

// //   firstArray.forEach(function (element) {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });
    
//     //* became
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }


// console.log( getCommonElements([1, 2, 3], [2, 4]));
// //повертає [2]
// console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// //повертає [1, 2]
// console.log( getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// //повертає [12, 27, 3]
// console.log( getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// //повертає [10, 30, 40]
// console.log( getCommonElements([1, 2, 3], [10, 20, 30]));
// //повертає []

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 13


//      function changeEven(numbers, value) {
//   // Change code below this line
         
//               //* was
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
         
//               //* became
         
//      const newNumbers = [];
//    numbers.forEach(element => {
//    if (element % 2 === 0) {
//       element = element + value;
//       newNumbers.push(element);
//     } else { newNumbers.push(element);
//          };
//   });
// return newNumbers;
//   // Change code above this line
// }

// console.log( changeEven([1, 2, 3, 4, 5], 10));
// //повертає новий масив [1, 12, 3, 14, 5]
// console.log( changeEven([2, 8, 3, 7, 4, 6], 10));
// //повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log( changeEven([17, 24, 68, 31, 42], 100));
// //повертає новий масив [17, 124, 168, 31, 142]
// console.log( changeEven([44, 13, 81, 92, 36, 54], 100));
// //повертає новий масив [144, 13, 81, 192, 136, 154]


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 14 - метод map(callback)

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map( planet => planet.length);

// console.log(planetsLengths); 
// //це масив [5, 4, 5, 7]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 15 - метод map(callback)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// console.log(titles);
// //це масив ["The Last Kingdom", "Beside Still Waters", 
// //"The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 16 - метод flatMap(callback)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres);
// //це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 17 - метод map(callback)



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 18


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 19

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 20