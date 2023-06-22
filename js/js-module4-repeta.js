"use strict";
//* -----------------------------------

//** REDUCE */ reduce()

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// // accumulator = 0 -> number = 5 -> return 0 + 5
// // accumulator = 5 -> number = 10 -> return 5 + 10
// // accumulator = 15 -> number = 15 -> return 15 + 15
// // accumulator = 30 -> number = 20 -> return 30 + 20
// // accumulator = 50 -> number = 25 -> return 50 + 25

// //* -----------------------------------
/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

// //* -----------------------------------
/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);
// //1240

// //* -----------------------------------
/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// console.log(totalAmount);

// //* -----------------------------------
/*
 * Собираем все теги из твитов
 */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);
// //возвращает массив всех тегов, 12 шт. (вкл.повторяющиеся)
// //How it works:
// // acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// // acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// // return  [...['js', 'nodejs'], ...['html', 'css']]
// //  ['js', 'nodejs', 'html', 'css']

// //* -----------------------------------
/*
 * Ведём статистику тегов
 */
// // const tagsStats = allTags.reduce((acc, tag) => {
// //   console.log(acc);

// //   if (acc[tag]) {
// //     acc[tag] += 1;

// //     return acc;
// //   }

// //   acc[tag] = 1;

// //   return acc;
// // }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

//* -----------------------------------
//*_____________________________________________
//* ++++++++++++++++++++++++++++++++++++++++++++



//*_____________________________________________
//*==============      for Each (замена for)


// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function() {}); // функция обратного вызова для каждого элемента массива

// numbers.forEach(function(number, index, array) {
//   console.log("number is", number);
//   console.log(this)
// },
// {a: 5, b: 10});

//*_____________________________________________
//*==============      map

//*_____________________________________________
//*==============      filter - находит и возвращает множество [] из множества

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ]; 

// const onlinePlayers = players.filter( player => player.online);
// console.table(onlinePlayers);
// // (index)	id	name	timePlayed	online
// // 0	player-2	Poly	470	true
// // 1	player-3	Kiwi	230	true
// // 2	player-5	Chelsey	80	true

// const offlinePlayers = players.filter( player => !player.online);
// console.log(offlinePlayers);

// const bestPlayers = players.filter(player => player.timePlayed >= 300);
// console.log(bestPlayers);

//*_____________________________________________
//*==============      find - находит и возвращает {} первое совпадение

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ]; 

// const playerIdToFind = 'player-3';
// const playerWithId = players.find( player => player.id === playerIdToFind);
// console.log(playerWithId);

// const playerNameToFind = 'Ajax';
// const playerWithName = players.find( player => player.name === playerNameToFind);
// console.log(playerWithName);

// //через функцию: 

// // const findPlayerById = (allPlayer, playerId) => 
// //   allPlayer.find(player => player.id === playerId);
// //* АБО
//   // const findPlayerById = (allPlayer, playerId) => 
//   // allPlayer.find(({id}) => id === playerId);
// //* АБО
// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({id}) => id === playerId);
// };

// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));

//*_____________________________________________
//*==============      Метод every() - всі елементи масиву - Повертає true або false.

// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });
//*_____________________________________________

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 280, online: true },
// ]; 
// const isAllOnline = players.every(player => player.online)
// console.log("isAllOnline: ", isAllOnline);

// const isAllPro = players.every(player => player.timePlayed > 100)
// console.log("isAllPro: ", isAllPro);

//*_____________________________________________
//*==============      Метод some() - хоча б один елемент масиву - Повертає true або false.

// const isAnyOnline = players.some(player => player.online);
// console.log("isAnyOnline: ", isAnyOnline);

// const isAnyProPlayer = players.some(player => player.timePlayed > 300)
// console.log("isAnyProPlayer: ", isAnyProPlayer);

//*_____________________________________________
//*==============      Метод reduce(callback, initialValue)
// callback >> acc accumulator
//перебирает массив, возврашает что угодно


// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
//*_____________________________________________

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
//* 0 це початкове значення, може бути будь яким, це не індекс, і його можна не вказувати

// console.log(total); // 32

//*_____________________________________________

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// }

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary); //300

//*_____________________________________________

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ]; 

// const totalTimePlayed = players.reduce((totalTime, player) => {
//   return totalTime + player.timePlayed
// }, 0);
// console.log(totalTimePlayed);

//*_____________________________________________

const cart = [
  {label: "Apples", price: 100, quantity: 2},
  {label: "Bananas", price: 120, quantity: 3},
  {label: "Lemons", price: 70, quantity: 4},
];

// const totalAmount = cart.reduce((total, item) => {
//   return total + item.price * item.quantity; 
// }, 0);
//* АБО
const totalAmount = cart.reduce((total, {price, quantity}) => 

  total + price * quantity , 0);

console.log(totalAmount); //840 