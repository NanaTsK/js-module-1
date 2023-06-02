
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
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];
for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}

//* завдання
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) { 


console.log(color.hex);
// ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]

console.log(color.rgb);
// ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
}

console.log(hexColors);
// ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]

console.log(rgbColors);



// for (const key in apartment) {
//   keys.push(key);
// }
// for (const value in apartment) {
//   values.push(apartment[value]);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ x


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ x


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ x




