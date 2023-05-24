// Переменные и типы примитивов
// const и let
// let x = 5; если еще будем менять x

// Логирование с методом console.log()
// Уникальность идентификатора

//* ++++++++++++++++++++++++++++++++++++++++++++

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsey';
// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('Price:', totalPrice)
//* ++++++++++++++++++++++++++++++++++++++++++++

//  Оператот typeof (проверка типа)

// const type = typeof 'hgjhg';
// console.log(type);

//* ++++++++++++++++++++++++++++++++++++++++++++

// Kak window.alert() блокирует интерпретацию

// console.log('До');
// alert('THIS IS ALERT');
// console.log('После');

//* ++++++++++++++++++++++++++++++++++++++++++++
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

//* ++++++++++++++++++++++++++++++++++++++++++++
// 0,48 - 1,34

//* ++++++++++++++++++++++++++++++++++++++++++++

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
//* ++++++++++++++++++++++++++++++++++++++++++++

//Що буде виведено в консоль?:
console.log(0 || ('0' && {}));
// Вірна відповідь: {} 

//* ++++++++++++++++++++++++++++++++++++++++++++
//Що буде виведено в консоль?:
let a = 6; 
let b = false; 
let c = "12"; 
let d = 1; 
let result = a + d + c + b; 
console.log(result);


//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }

  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

//* ++++++++++++++++++++++++++++++++++++++++++++

let counter = 0;

while (counter < 50) {
  console.log("counter: ", counter + 10);
  counter += 5;
}

//* ++++++++++++++++++++++++++++++++++++++++++++
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
//* ++++++++++++++++++++++++++++++++++++++++++++

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

//* ++++++++++++++++++++++++++++++++++++++++++++

for (let i = 2; i <= 20; i += 5) {
  console.log(i);
}
//* ++++++++++++++++++++++++++++++++++++++++++++

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
//* ++++++++++++++++++++++++++++++++++++++++++++

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}
//* ++++++++++++++++++++++++++++++++++++++++++++

// Общая сумма зарплат работников:
// 1. сделать вары:
const minSalary = 500;
const maxSalary = 5000;
const employees = 9;
let totalSalary = 0;

// 2. перебрать работнков в цикле:
for (let i = 1; i <= employees; i += 1) { 
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
    console.log(`ЗП работника номер ${i} - ${salary}`);
    totalSalary += salary;
        // console.log(`totalSalary: `, totalSalary);

}
    console.log(`totalSalary: `, totalSalary);

// 3. сгенерить случайную зп

// 4. лог
 
//* ++++++++++++++++++++++++++++++++++++++++++++
// Сумма четных чисел
// 1. сделать вары:
const min = 6;
const max = 13;
let total = 0;

// 2. for from min to max, с шагом в 1
for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        // console.log(`Не четное: `, i);
        continue;
    }
    console.log(`четное: `, i);
    total += i;
}
console.log(`total: `, total);
// 3. проверяем остатки от деления

// 4. пишем в сумму / лог



//* ++++++++++++++++++++++++++++++++++++++++++++

// Заказ в магазине:
let balance = 10000;
const payment = 2000;


console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем баланс.`)

if (balance >= payment) {
    console.log(`ok`);
    balance -= payment;
    console.log(`На счету осталось ${balance} кредитов`);
}

//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++

