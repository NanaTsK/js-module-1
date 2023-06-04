
// * ЗАВДАННЯ 1

// const apartment = {

//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// console.log(apartment.imgUrl);
// console.log(apartment.descr);
// console.log(apartment.rating);
// console.log(apartment.price);
// console.log(apartment.tags);

//* ++++++++++++++++++++++++++++++++++++++++++++

// * ЗАВДАННЯ 2

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }

// };


// console.log(apartment.owner);


//* ++++++++++++++++++++++++++++++++++++++++++++

// * ЗАВДАННЯ 4 (звернення через крапку) :
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);

// const firstTag = apartment.tags[0];
// console.log(firstTag);

// const lastTag = apartment.tags[apartment.tags.length-1];
// console.log(lastTag);



//* ++++++++++++++++++++++++++++++++++++++++++++

// * ЗАВДАННЯ 5 (звернення по квадратним дужкам) - об'єкт["ключ_властивості"] :

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// console.log(aptRating);

// const aptDescr = apartment["descr"];
// console.log(aptDescr);

// const aptPrice = apartment["price"];
// console.log(aptPrice);

// const aptTags = apartment["tags"];
// console.log(aptTags);


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 6 - додавання та змiна значення властивостей об'єкта :

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
   
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name );
// console.log(apartment.tags);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 7 - додавання значення властивостей об'єкта :

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 5

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 9

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
    [emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam"
};


console.log(credentials.email); 
console.log(credentials.password); 

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line


// for (const key in apartment) {
//   keys.push(key);
// }
// for (const value in apartment) {
//   values.push(apartment[value]);
// }

//  console.log(keys);
// console.log(values);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 11 - Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, 
// використовується метод hasOwnProperty(key), який повертає true або false.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 12 

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
    
//     propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }


// console.log( countProps({}) );
// // повертає 0
// console.log( countProps({ name: "Mango", age: 2 }) );
// // повертає 2
// console.log( countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) );
// // повертає 3

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 13

//*приклад завдання
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

//*завдання

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 14
//Виконай рефакторинг функції countProps(object), 
//використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
 
//     const keys = Object.keys(object);
  
//     for (const key of keys) { 
//         propCount += 1;
//     }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// // повертає 0
// console.log(countProps({ name: "Mango", age: 2 }));
// // повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// // повертає 3


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 15

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//     const salaryValue = Object.values(salaries);
//     for (const salary of salaryValue) {
//     totalSalary += salary; 
// }
// console.log(totalSalary)
    
//   // Change code above this line
//   return totalSalary;
// }

// console.log( countTotalSalary({}) );
// // повертає 0
// console.log( countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) );
// // повертає 330
// console.log( countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );
// // повертає 400


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 17 - масив однотипних об'єктів

//*приклад завдання
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
// ];
// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

//* завдання
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) { 

// hexColors.push(color.hex)
// console.log(color.hex);

// rgbColors.push(color.rgb)
// console.log(color.rgb);
// }

// console.log(hexColors);
// // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]

// console.log(rgbColors);
// // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 18 - Пошук об'єкта за значенням властивості
//Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products 
//і повертає його ціну(властивість price)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (let product of products) { 
//         if (productName === product.name) { 
//             return product.price

//         }
//     }
//             return null
// }

// console.log( getProductPrice("Radar") );
// // повертає 1300.
// console.log( getProductPrice("Grip") );
// // повертає 1200.
// console.log( getProductPrice("Scanner") );
// // повертає 2700.
// console.log( getProductPrice("Droid") );
// // повертає 400.
// console.log( getProductPrice("Engine") );
// // повертає null.


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 19 - колекція значень властивості
//Функція повинна повернути масив всіх значень властивості

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let propValues = [];
//     for (let product of products) {
//         if (product.hasOwnProperty(propName)) { 
//             propValues.push(product[propName]);
//         }   
//     }
//      return propValues;
// }

//* ИЛИ
// function getAllPropValues(propName) {
//     const allValues = [];
//     for (product of products) {
//         if (Object.keys(product).includes(propName)) {
//             allValues.push(product[propName])
//         }
//     }
//     return allValues
// }


// console.log( getAllPropValues("name") );
// // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log( getAllPropValues("quantity") );
// // повертає [4, 3, 7, 9]
// console.log( getAllPropValues("price") );
// // повертає [1300, 2700, 400, 1200]
// console.log( getAllPropValues("category") );
// // повертає []


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 20 - загальна вартість товару

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (let product of products) { 
//         console.log(product);
//         if (product.hasOwnProperty("name") && product.name === productName) { 
//             console.log(product.price);
//             return product.price * product.quantity;
//         }
//     }
//     return 0
// }

//* ИЛИ
// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log( calculateTotalPrice("Blaster") );
// // повертає 0
// console.log( calculateTotalPrice("Radar") );
// // повертає 5200
// console.log( calculateTotalPrice("Droid") );
// // повертає 2800
// console.log( calculateTotalPrice("Grip") );
// // повертає 10800
// console.log( calculateTotalPrice("Scanner"));
// // повертає 8100


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 21 -Деструктуризація

//*приклад завдання
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// // Деструктуризуємо
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

//* завдання

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// //* was:
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// //* became:
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday );
// // це число 28
// console.log( today );
// // це число 26
// console.log(tomorrow );
// // це число 33
// console.log(meanTemperature );
// // це число 29

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// //* was:
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// //* became:
// const { yesterday, today, tomorrow,
// icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// console.log(yesterday );
// // це число 28
// console.log( today );
// // це число 26
// console.log(tomorrow );
// // це число 33
// console.log(icon );
// // це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 23 - змінa ім'я змінної Під час деструктуризації  

//*приклад завдання
// const firstBook = {
//   title: "Останнє королівство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Останнє королівство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// console.log(firstBook);


// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480


//* завдання

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// //* was
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// //* became
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,
// icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log( highYesterday );
// // це число 28
// console.log( highToday );
// // це число 26
// console.log( highTomorrow );
// // це число 33
// console.log( highIcon );
// // це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 24 - деструктуризація об'єкта.

//*приклад завдання
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
// ];

//     //* ИЛИ
// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

//     //* ИЛИ
// for (const book of books) {
//     const { title, author, rating } = book;
//     //* ИЛИ
// for (const { title, author, rating } of books) {

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//* завдання

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors );
// // це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors );
// // це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 25 - деструктуризації властивостей вкладених об'єктів

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { high: highToday, low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;


// //* was:
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;


// console.log(highToday );
// //це число 32
// console.log(lowToday );
// //це число 28
// console.log(todayIcon );
// //це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// console.log(highTomorrow );
// //це число 31
// console.log(lowTomorrow );
// //це число 27
// console.log(tomorrowIcon );
// //це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 26 - деструктуризація властивостей об'єкта


// // Change code below this line
// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
    
// //* was
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 }}));
// //повертає 28.5
// console.log(calculateMeanTemperature({today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 }}));
// //повертає 37


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 27 - ... (spread) повертає розпакований масив

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log( scores );
// //це масив [89, 64, 42, 17, 93, 51, 26]
// console.log( bestScore );
// //це число 93
// console.log( worstScore );
// //це число 17


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 28 - з'єднання масивів, ...spread, 
//*вищий / нижчий результат з масиву Math.max() Math.min()

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores) ;
// const worstScore = Math.min(...allScores) ;;

// console.log( firstGroupScores );
// //це масив [64, 42, 93]
// console.log( secondGroupScores );
// //це масив [89, 14, 51, 26]
// console.log( thirdGroupScores );
// //це масив [29, 47, 18, 97, 81]
// console.log( allScores );
// //це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log( bestScore );
// //це число 97
// console.log(worstScore );
// //це число 14


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 29 - з'єднання масивів, ...spread

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};

console.log( finalSettings.theme );
//дорівнює "light"
console.log( finalSettings.public );
//дорівнює "false"
console.log( finalSettings.withPassword );
//дорівнює "true"
console.log( finalSettings.minNumberOfQuestions);
//дорівнює 10
console.log( finalSettings.timePerQuestion);
//дорівнює 30


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 30 - повертає новий об'єкт завдання

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//     return { completed, category, priority, ...data };
    
//   // Change code above this line
// }

// console.log( makeTask({}) );
// //повертає { category: "General", priority: "Normal", completed: false }

// console.log( makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// //повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// console.log(makeTask({ category: "Finance", text: "Take interest" }) );
// //повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }) );
// //повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// console.log(makeTask({ text: "Buy bread" }));
// //повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 31 - сума будь-якої кількості аргументів

//*приклад завдання

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

//* завдання

// Change code below this line
// function add(...args) {
//     let sum = 0;
// for (let i = 0; i < args.length; i += 1) {
//   sum += args[i];
//     }
// return sum    // Change code above this line
// }

//*ИЛИ
// function add(...args) {
//     let sum = 0;
// for (let arg of args) {
//   sum += arg;
//     }
// return sum    // Change code above this line
// }

// console.log( add(15, 27) );
// //повертає 42
// console.log( add(12, 4, 11, 48) );
// //повертає 75
// console.log( add(32, 6, 13, 19, 8) );
// //повертає 78
// console.log( add(74, 11, 62, 46, 12, 36) );
// //повертає 241

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 32 

//*приклад завдання
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//* завдання - сума всіх аргументів без першого

// // Change code below this line
// function addOverNum(...args) {
//   const firstArg = args[0];
//   let total = 0;

//     for (const arg of args) {
//         if (arg > firstArg) { 
//     total += arg;
//         }
//   }
//   return total;
//   // Change code above this line
// }

// console.log( addOverNum(50, 15, 27) );
// //повертає 0
// console.log( addOverNum(10, 12, 4, 11, 48, 10, 8));
// //повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// //повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// //повертає 218


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 33 - Масив збігів

// Change code below this line
function findMatches(array1, ...numbers) {
  const matches = []; //* Don't change this line

    for (let i = 0; i < array1.length; i += 1) { 
        let currentElement = array1[i];

        if (numbers.includes(currentElement)) { 
            matches.push(currentElement);
        }
    }
  // Change code above this line
  return matches;
}

console.log( findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//повертає [1, 2]
console.log( findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//повертає [17, 89, 2]
console.log( findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
//повертає [24, 9, 41]
console.log( findMatches([63, 11, 8, 29], 4, 7, 16));
//повертає []

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 34

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) { 
//       return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) { 
//        return `Updating book ${oldName} to ${newName}`
//     },
//   // Change code above this line
// };

// console.log(bookShelf.addBook("Haze") );
// //повертає рядок "Adding book Haze"

// console.log(bookShelf.removeBook("Red sunset"));
// //повертає рядок "Deleting book Red sunset"

// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// //повертає рядок "Updating book Sands of dune to Dune"


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//  const bookIndex = this.books.indexOf(oldName);
//    this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// //значення властивості books - це масив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// // значення властивості books - це масив["Dune", "Haze", "The guardian of dreams"]


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 36 - 
//Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//   // Change code below this line

//     potions: [],

//   // Change code above this line
// };

// // addBook(bookName) {
// //       return `Adding book ${bookName}`;
// //     },

// console.log(atTheOldToad.potions );
// //це масив []


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 37 - Отримуємо все зілля

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//  getPotions(potions) {
//     return this.potions
//   }
//     // Change code above this line
// };


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 38 - додаємо нове зілля

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//      this.potions.push(potionName)


//     // Change code above this line
//   },
// };


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 39 - видаляємо зілля

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//          return this.potions.splice(this.potions.indexOf(potionName), 1)

//     // Change code above this line
//   },
// };

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 40 - оновлюємо зілля

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     // const potionIndex = this.potions.indexOf(oldName);
//     // this.potions.splice(potionIndex, 1, newName);
//     // return this.potions;
      
//       //* ИЛИ
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 41 - розширюємо інвентар - ADD, REMOVE, UPDATE
