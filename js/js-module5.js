"use strict";


const someString = "it`s my car!";
const template = "car";
console.log(!!~someString.indexOf(template))
// замість індекса прийде true

//*_____________________________________________
//*==============//*** THIS ***//==============*//
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++

const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors());
// ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors());
// ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

bookShelf.addAuthor("Черепашка");
console.log(bookShelf.getAuthors());

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++


function foo() {
  console.log(this);
}

foo(); // window без "use strict" і undefined з "use strict"
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
//** this в методі об'єкта
//*

const petya = {
  username: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
//** this в методі об'єкта
//*
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** this у стрілочних функціях
//*
const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}


//*_____________________________________________
//*==============//*** Методи функцій ***//==============*//
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Метод call()
//*
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//     username: "Полі",
// };
// const turtle = {
//     username: "Черепаха"
// }

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// greetGuest.call(turtle, "Привет");

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Метод apply() //ппередасть елементи масиву як окремі аргумент
//*

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Полі",
};

greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++


//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
