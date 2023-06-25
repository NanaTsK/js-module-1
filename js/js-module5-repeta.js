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

const showThis = function(a, b, c) {
    console.log(a, b, c)
    console.log("show -> this", this)
};
// showThis(); //show -> this undefined

const objA = {
    a: 5,
    b: 10
};
showThis.call(objA, 10, 20, 30); //show -> this { a: 5, b: 10 }
// = 
showThis.apply(objA, [10, 20, 30]); //show -> this { a: 5, b: 10 }

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
//*==============   [[Prototype]] - __proto__

// const objC = (
//     z: 5,
// )

