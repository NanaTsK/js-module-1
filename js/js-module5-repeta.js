"use strict";

//*_____________________________________________
//*==============      this

//** */ wrong:

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("increment -> this", this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log("decrement -> this", this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(10, counter.decrement);

//* this - undefined, 
//*потому что при передаче метода объекта как коллбека, контекст не сохранярется !


//*_____________________________________________
//*==============      this

//** */ right: 

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("increment -> this", this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log("decrement -> this", this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.decrement.bind(counter));


//*_____________________________________________
//*==============        this

// const showThis = function(a, b, c) {
//     console.log(a, b, c)
//     console.log("show -> this", this)
// };
// // showThis(); //show -> this undefined

// const objA = {
//     a: 5,
//     b: 10
// };
// showThis.call(objA, 10, 20, 30); //show -> this { a: 5, b: 10 }
// // = 
// showThis.apply(objA, [10, 20, 30]); //show -> this { a: 5, b: 10 }

//call / apply принудительно вызывают

//*_____________________________________________
//*==============       Метод call() / Метод apply()

// const changeColor = function (color) {
//    console.log("changeColor -> this", this); 
//    this.color = color;
// }; 

// // 1:
// const hat = {
//     color: "black",
// };

// changeColor.call(hat, "orange");
// console.log(hat); //{ color: 'orange' }

// // 2:
// const sweater = {
//     color: "green",
// };

// changeColor.call(sweater, "pink");
// console.log(sweater); //{ color: 'pink' }

//*_____________________________________________
//*==============       Метод bind() 
// створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. 
//Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat); //{ color: 'yellow' }

// changeSweaterColor("red");
// console.log(sweater); //{ color: 'red' }


//*_____________________________________________
//*==============   [[Prototype]] - __proto__ - Прототипне наслідування

// const objC = {
//     z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objC); //{ z: 5 }
// console.log(objC.hasOwnProperty("z")); //true

// console.log(objB); //{}
// console.log(objB.hasOwnProperty("z")); //false

// console.log(objB.y); //2
// console.log(objB.z); //5

// console.log(objA); //{ x: 1 }
// console.log(objA.hasOwnProperty("z")); //false

// console.log(objA.y); //2
// console.log(objA.z); //5

// //* присваивание своего z в objA:
// objA.z = 1000;
// console.log("objA", objA); //objA { x: 1, z: 1000 }
// console.log(objA.hasOwnProperty("z")); //true



//*_____________________________________________
//*==============   ** Конструктор класу - constructor

// const Car = function() {
//     console.log(this); //Car {}

//     this.a = 555;
// };

// const myCar = new Car();

// console.log(myCar); //Car { a: 555 }

//*============== 
// const Car = function(value) {
//     console.log(this); //Car {} Car {} Car {}

//     this.a = value;
// };

// const myCar1 = new Car(5);
// console.log(myCar1); //Car { a: 5 }

// const myCar2 = new Car(10);
// console.log(myCar2); //Car { a: 10 }

// const myCar3 = new Car(25);
// console.log(myCar3); //Car { a: 25 }


//*============== 
// const Car = function(brand, color, price) {
//     console.log(this); //Car {} Car {} Car {}

//     this.brand = brand;
//     this.color = color;
//     this.price = price;
// };

// const myCar1 = new Car("Mazda", "red", 10000);
// console.log(myCar1);
// //Car { brand: 'Mazda', color: 'red', price: 10000 }

// const myCar2 = new Car("Daihatsu", "grey", 5000);
// console.log(myCar2); 
// //Car { brand: 'Daihatsu', color: 'grey', price: 5000 }

// const myCar3 = new Car("Volvo", "blue", 12000);
// console.log(myCar3); 
// //Car { brand: 'Volvo', color: 'blue', price: 12000 }

//** АБО деструктуризовано + методи на прототипі: sayHi, changePrice

// const Car = function({brand, color, price} = {}) {
//     // console.log(this); //Car {} Car {} Car {}

//     this.brand = brand;
//     this.color = color;
//     this.price = price;
// };

// console.log(Car.prototype);

// Car.prototype.sayHi = function() {
//     console.log("Car.prototype.sayHi -> this", this);
//     console.log("Hello :) ");
// };

// console.log(Car.prototype);

// Car.prototype.changePrice = function(newPrice) {
//     this.price = newPrice;
// };

// const myCar1 = new Car({
//     brand: "Mazda",
//     color: "red",
//     price: 10000,
// });
// console.log(myCar1);
// //Car { brand: 'Mazda', color: 'red', price: 10000 }

// myCar1.sayHi(); //Hello :) 

// myCar1.changePrice(8000);
// console.log(myCar1); 
// //Car { brand: 'Mazda', color: 'red', price: 8000 }

// const myCar2 = new Car({
//     brand: "Daihatsu",
//     color: "grey",
//     price: 5000,
// });
// console.log(myCar2); 
// //Car { brand: 'Daihatsu', color: 'grey', price: 5000 }

// const myCar3 = new Car({
//     brand: "Volvo",
//     color: "blue",
//     price: 12000,
// });
// console.log(myCar3); 
// //Car { brand: 'Volvo', color: 'blue', price: 12000 }


//*_____________________________________________
//*==============   ** Конструктор класу - constructor

// const User = function({email, psswrd} = {}) {
//     this.email = email;
//     this.psswrd = psswrd;
// };

// User.prototype.changeEmail = function(newEmail) {
//     this.email = newEmail;
// };

// const mango = new User({
//     email: "mango@mail.com", 
//     psswrd: 12345,
// });

// console.log(mango);
// //User { email: 'mango@mail.com', psswrd: 12345 }

// mango.changeEmail("mangoNew@mail.com");
// console.log(mango);
// //User { email: 'mangoNew@mail.com', psswrd: 12345 }


//*_____________________________________________
//*==============   ** Конструктор класу - constructor

console.log(Math.round(5.1));
console.log(Math.PI);


