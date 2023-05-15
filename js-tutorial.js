// Переменные и типы примитивов
// const и let
// let x = 5; если еще будем менять x

// Логирование с методом console.log()
// Уникальность идентификатора

// ++++++++++++++++++++++++++++++++++++++++++++

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsey';
const message = 'Welcome';
const isOpen = true;
const shouldConfirm = false;

// console.log('Price:', totalPrice)
// ++++++++++++++++++++++++++++++++++++++++++++

//  Оператот typeof (проверка типа)

// const type = typeof 'hgjhg';
// console.log(type);

// ++++++++++++++++++++++++++++++++++++++++++++

// Kak window.alert() блокирует интерпретацию

// console.log('До');
// alert('THIS IS ALERT');
// console.log('После');

// ++++++++++++++++++++++++++++++++++++++++++++
// Ввод пользователя
// Методы window.confirm() и window.prompt():

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// Oк= true, Cancel= falce

// const quantity = prompt('Введите количество товаров');
// console.log(quantity);
// // Oк= inserted info, Cancel= null
// console.log(typeof quantity);

// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity)
// console.log(quantity);
// console.log(typeof quantity);

// ++++++++++++++++++++++++++++++++++++++++++++
// 0,48 - 1,34

// ++++++++++++++++++++++++++++++++++++++++++++

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

const room = 716;
const type = 'VIP'

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
// console.log(welcomeMsg);
// ИЛИ
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`
console.log(welcomeMsg);
// ++++++++++++++++++++++++++++++++++++++++++++
