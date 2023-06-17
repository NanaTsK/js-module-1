"use strict";


// const someString = "it`s my car!";
// const template = "car";
// console.log(!!~someString.indexOf(template))
// // замість індекса прийде true

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

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors());
// // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors());
// // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// bookShelf.addAuthor("Черепашка");
// console.log(bookShelf.getAuthors());

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++


// function foo() {
//   console.log(this);
// }

// foo();
// window без "use strict" і undefined з "use strict"
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
//** this в методі об'єкта
//*

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

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
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}


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
// ** Метод apply() // передасть елементи масиву як окремі аргумент
//*

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++


//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++




//* ++++++++++++++++++++++++++++++++++++++++++++
// * Метод Object.create(obj)

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4


//* ++++++++++++++++++++++++++++++++++++++++++++
// * Метод hasOwnProperty()

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

//* ++++++++++++++++++++++++++++++++++++++++++++
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Класи - Оголошення класу
//*

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}


//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Конструктор класу - constructor
//*

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango);
// // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly);
// // { name: 'Поли', email: 'poly@mail.com' }

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Методи класу
//*

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Приватні властивості
//*

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Геттери і сеттери - get, set
//*
// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

//* ++++++++++++++++++++++++++++++++++++++++++++

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** padStart()
//*
//padStart(targetLength)
//padStart(targetLength, padString)


// "abc".padStart(10); // "       abc"
// "abc".padStart(10, "foo"); // "foofoofabc"
// "abc".padStart(6, "123465"); // "123abc"
// "abc".padStart(8, "0"); // "00000abc"
// "abc".padStart(1); // "abc"


// const str1 = '5';

// console.log(str1.padStart(2, '0'));
// // Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// // Expected output: "************5581"



//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** padEnd()
//*

//padEnd(targetLength)
//padEnd(targetLength, padString)


// const str1 = 'Breaded Mushrooms';

// console.log(str1.padEnd(25, '.'));
// // Expected output: "Breaded Mushrooms........"

// const str2 = '200';

// console.log(str2.padEnd(5));
// // Expected output: "200  "

//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Статичні властивості - static
//*

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// //*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Статичні методи
//*

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// //*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Наслідування класів - extends 
//*

// class Child extends Parent {
//   // ...
// }
 //* ++++++++++++++++++++++++++++++++++++++++++++

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor);
// // { email: "mango@mail.com" }
// console.log(editor.email);
// // "mango@mail.com"


// //*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Конструктор дочірнього класу - super(аргументи)
//*
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor);
// // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email);
// // 'mango@mail.com'

// //*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++
//* 
// ** Методи дочірнього класу
//*
// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

//* ++++++++++++++++++++++++++++++++++++++++++++

// class Foo {
//   constructor(name) {
//     this.name = name;
//   }

//   getNameSeparator() {
//     return '-';
//   }
// }

// class FooBar extends Foo {
//   constructor(name, index) {
//     super(name);
//     this.index = index;
//   }

//   getFullName() {
//     return this.name + super.getNameSeparator() + this.index;
//   }
// }

// const firstFooBar = new FooBar('foo', 1);

// console.log(firstFooBar.name);
// // Expected output: "foo"

// console.log(firstFooBar.getFullName());
// // Expected output: "foo-1"
