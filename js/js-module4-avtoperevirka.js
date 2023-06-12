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


// // Change code below this line
// const students = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = (users) => {
//     const names = users.map(user => user.name);
//     return names
//   };
//   // Change code above this line

// console.log(getUserNames);
// //повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", 
// //"Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 18

// // Change code below this line

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//     },
// ]
// const getUserEmails = users => {
//     return users.map(user => user.email)

//   };
//   // Change code above this line


// console.log(getUserEmails);
// //повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", 
// //"rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 19 - Метод filter(callback)

// //*приклад завдання
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values);
//  // [51, -3, 27, 21, -68, 42, -37]


// //* завдання
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// console.log(numbers);
// console.log(evenNumbers);
// //це масив [24, 82, 36, 18, 52]
// console.log(oddNumbers);
// //[17, 61, 47, 73]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 20 - filter(), залишити тільки унікальні елементи.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// //- це масив["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log( uniqueGenres );
// // це масив["adventure", "history", "fiction", "mysticism", "horror"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 21 - метод filter()

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

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log( topRatedBooks);
// console.log(booksByAuthor);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 22

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     const usersWith = users.filter(user => user.eyeColor === color)
//     return usersWith;

// };
// // Change code above this line

// console.log( getUsersWithEyeColor(users, "blue"));
// // масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr

// console.log( getUsersWithEyeColor(users, "green"));
// //повертає масив об'єктів з іменами Ross Vazquez і Elma Head


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 23
// use users array from N 22


// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => 
 
//    users.filter(user => {
//        return user.age >= minAge && user.age <= maxAge

// });
// // Change code above this line

// console.log(getUsersWithAge(users, "20", "30"));
// //повертає масив об'єктів користувачів з іменами `Ross Vazquez`, `Elma Head` і `Carey Barr`

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 24 
// use users array from N 22

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
    
//     const usersWithFriend = users.filter(user =>
//         user.friends.includes(friendName));
//     return usersWithFriend
   
// };
// // Change code above this line


// console.log(getUsersWithFriend(users, "Briana Decker"));
// // повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// // повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// console.log(getUsersWithFriend(users, "Adrian Cross"));
// // повертає порожній масив


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 25
// use users array from N 22

// // Change code below this line

// const getFriends = (users) => {

//     const getAllFriends = users.flatMap(user => user.friends);

//     const uniqueFriends = getAllFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
// )
//    return uniqueFriends
// };
// // Change code above this line


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 26
// use users array from N 22

// // Change code below this line
// const getActiveUsers = (users) => {
//     const activeUsers = users.filter(user => user.isActive === true)
//     return activeUsers;
// };
// // Change code above this line

// console.log(getActiveUsers(users));
// //повертає масив об'єктів користувачів Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 27
// use users array from N 22

// // Change code below this line
// const getInactiveUsers = (users) => {
//    const inactiveUsers = users.filter(user => user.isActive !== true)
//      return inactiveUsers;
// };
// // Change code above this line

// console.log(getInactiveUsers(users));
// //повертає масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 28

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
 
// const bookByAuthor = books.find(book => book.author === AUTHOR)


// console.log(bookWithTitle);
// // це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// console.log(bookByAuthor);
// // це об'єкт книги автора "Robert Sheckley"

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 29
// use users array from N 22

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//     const userWithEmail = users.find(user => user.email === email);
//    return userWithEmail
// };
// // Change code above this line


// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// //повертає об'єкт користувача з ім'ям Sheree Anthony

// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// //повертає об'єкт користувача з ім'ям Elma Head

// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// //повертає об'єкт користувача з ім'ям Blackburn Dotson



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 30

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// console.log(eachElementInFirstIsEven);
// // це буль true
// console.log(eachElementInFirstIsOdd);
// // це буль false
// console.log(eachElementInSecondIsEven);
// // це буль false
// console.log(eachElementInSecondIsOdd);
// // це буль true
// console.log(eachElementInThirdIsEven);
// // це буль false
// console.log(eachElementInThirdIsOdd);
// // це буль false

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 31
// use users array from N 22

// // Change code below this line
// const isEveryUserActive = (users) => {
//     const activeUsers = users.every(user => user.isActive === true)
//       return activeUsers;
// };
// // Change code above this line

// console.log(isEveryUserActive);
// //повертає false

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 32

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// // це буль true
// console.log(anyElementInFirstIsOdd);
// // це буль false
// console.log(anyElementInSecondIsEven);
// // це буль false
// console.log(anyElementInSecondIsOdd);
// // це буль true
// console.log(anyElementInThirdIsEven);
// // це буль true
// console.log(anyElementInThirdIsOdd);
// // це буль true

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 33
// use users array from N 22

// // Change code below this line
// const isAnyUserActive = users => {
//     const activeUsers = users.some(user => user.isActive === true)
//       return activeUsers;
// };
// // Change code above this line

// console.log(isAnyUserActive(users));
// //повертає true

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 34

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => { 
//     return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// //це масив[1270, 468, 710, 244]
// console.log(totalPlayTime);
// //це число 2692
// console.log(averagePlayTime);
// //це число 673

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((averageTime, {playtime, gamesPlayed}) => {
//     return averageTime + playtime / gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame); 
// //це число 1023


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 36
// use users array from N 22

// // Change code below this line
// const calculateTotalBalance = users => {
//     return users.reduce((totalBalance, user) =>
//     { return totalBalance + user.balance }, 0)
// };
// // Change code above this line

// //* АБО
// // const calculateTotalBalance = users.reduce(
// //     (totalBalance, user) => totalBalance + user.balance, 0
// // );


// console.log(calculateTotalBalance(users)); 
// //це число 20916

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 37
// use users array from N 22

// // Change code below this line
// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => total + user.friends.length, 0);
// };
// // Change code above this line

// console.log(getTotalFriendCount(users)); 
// //це число 14

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 38

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(releaseDates);
// //це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
// console.log(ascendingReleaseDates);
// //це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]

// console.log(authors);
// //це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// console.log(alphabeticalAuthors);
// // [ 'Bernard Cornwell',
// //   'Fyodor Dostoevsky',
// //   'Robert Sheckley',
// //   'Tanith Lee' ]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 39

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(releaseDates);
// //це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]

// console.log(ascendingReleaseDates);
// //це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates);
// //це масив[2016, 2012, 2008, 1997, 1984, 1973, 1967]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 40 
//*копія масиву authors

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.localeCompare(secondAuthor)
// );
// const authorsInReversedOrder = [...authors].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.localeCompare(firstAuthor)
// );

// console.log(authors);

// console.log(authorsInAlphabetOrder);
// //це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder);
// //це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 41

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

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author)
// );
// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author)
// );
// const sortedByAscendingRating = [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.rating - secondAuthor.rating
// );
// const sortedByDescentingRating = [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.rating - firstAuthor.rating
// );

// console.log(sortedByAuthorName);
// // [ { title: 'The Last Kingdom',
// //     author: 'Bernard Cornwell',
// //     rating: 8.38 },
// //   { title: 'Enemy of God',
// //     author: 'Bernard Cornwell',
// //     rating: 8.67 },
// //   { title: 'The Dream of a Ridiculous Man',
// //     author: 'Fyodor Dostoevsky',
// //     rating: 7.75 },
// //   { title: 'Beside Still Waters',
// //     author: 'Robert Sheckley',
// //     rating: 8.51 },
// //   { title: 'Redder Than Blood',
// //     author: 'Tanith Lee',
// //     rating: 7.94 } ]

// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 42
// use users array from N 22

// // Change code below this line
// const sortByAscendingBalance = users => {
   
//     return [...users].sort((a, b) =>
//     a.balance - b.balance)
// };
// // Change code above this line

// console.log(sortByAscendingBalance(users));

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 43
// use users array from N 22

// // Change code below this line
// const sortByDescendingFriendCount = users => {
   
//  return [...users].sort((a, b) =>
//     b.friends.length - a.friends.length)
// };
// // Change code above this line

// console.log(sortByDescendingFriendCount(users));

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 44
// use users array from N 22

// // Change code below this line
// const sortByName = users => {
//     return [...users].sort(
//         (firstUser, secondUser) =>
//        firstUser.name.localeCompare(secondUser.name)
//     )
// };
// // Change code above this line

// console.log(sortByName(users));

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 45
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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor))

// console.log(names);
// // це масив["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 46
// use users array from N 22

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
   
//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name)
// };
// // Change code above this line


// console.log(getNamesSortedByFriendCount(users));
// //["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 47
// use users array from N 22

// // Change code below this line
// const getSortedFriends = users => {
//     return [...users] = users.flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend))

   
// };
// // Change code above this line

// console.log(getSortedFriends(users));


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 48
// use users array from N 22

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {

//         return [...users]
//         .filter(user => user.gender === gender)
//         .map(user => user.balance)
//         .reduce((totalBalance, balance) => totalBalance + balance, 0)
// };
// // Change code above this line

// console.log(getTotalBalanceByGender(users, "male"));
// //функція повертає число 12053
// console.log(getTotalBalanceByGender(users, "female"));
// //функція повертає число 8863


//* ++++++++++++++++++++++++++++++++++++++++++++






