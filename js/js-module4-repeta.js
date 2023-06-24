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

// const cart = [
//   {label: "Apples", price: 100, quantity: 2},
//   {label: "Bananas", price: 120, quantity: 3},
//   {label: "Lemons", price: 70, quantity: 4},
// ];

// // const totalAmount = cart.reduce((total, item) => {
// //   return total + item.price * item.quantity; 
// // }, 0);
// //* АБО
// const totalAmount = cart.reduce((total, {price, quantity}) => 

//   total + price * quantity , 0);

// console.log(totalAmount); //840 

//*_____________________________________________

/* 1-собираем все теги из твитов
*/
// const tweets = [
// {id: "000", likes: 5, tags: ["js", "nodejs"]},
// {id: "001", likes: 2, tags: ["html", "css"]},
// {id: "002", likes: 17, tags: ["html", "js", "nodejs"]},
// {id: "003", likes: 8, tags: ["css", "react"]},
// {id: "004", likes: 0, tags: ["js", "nodejs", "react"]},
// ];

//* БУЛО
// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags)
//   return tags
// }, []);

//* СТАЛО
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// //* АБО
// // const allTags = tweets.reduce((tags, tweet) => {return [...tags, ...tweet.tags]}, []);

// console.log(allTags); 
// //масив усіх тегів 

// /* 2-статистка тегов
// */
// // const tagsStats = allTags.reduce((acc, tag) => {
// // console.log(acc);

// //   if(acc[tag]) {
// //     acc[tag] +=1;

// //     return acc;
// //   }

// //   acc[tag] = 1;
// //   return acc
// // }, {});

// //* АБО

// // const tagsStats = allTags.reduce((acc, tag) => ({
// //       ...acc,
// //       [tag]: acc[tag] ? acc[tag] + 1 : 1,
// //     }), 
// //     {});

//     //* АБО
//     const tagsStats = allTags.reduce((acc, tag) => {
//       return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//       }; 
//     }, {});


// console.log(tagsStats);

//*_____________________________________________

/* acc[tag] explained:
*/

// const user = {
//   name: "Mango",
// };
// const key = "name";

// console.log(user["name"]);


//*_____________________________________________
//*==============      Sort

/* сортировка сложных объектов
*/

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ]; 
// //по игровому времени:
// const sortedByWorstPayers = [...players].sort((prevPlayer, nextPlayer) => 
// prevPlayer.timePlayed - nextPlayer.timePlayed);
// console.log(sortedByWorstPayers);

// // │ (index) │     id     │   name    │ timePlayed │ online │ 
// // ├─────────┼────────────┼───────────┼────────────┼────────┤ 
// // │    0    │ 'player-5' │ 'Chelsey' │     80     │  true  │ 
// // │    1    │ 'player-4' │  'Ajax'   │    150     │ false  │ 
// // │    2    │ 'player-3' │  'Kiwi'   │    230     │  true  │ 
// // │    3    │ 'player-1' │  'Mango'  │    310     │ false  │ 
// // │    4    │ 'player-2' │  'Poly'   │    470     │  true  │ 

// const sortedByBestPayers = [...players].sort((prevPlayer, nextPlayer) => 
// nextPlayer.timePlayed - prevPlayer.timePlayed);
// console.log(sortedByBestPayers);


// //по имени:
// const sortedByName = [...players].sort((prevPlayer, nextPlayer) => {
//   const result = prevPlayer.name[0] > nextPlayer.name[0];
//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;  
//   }
// });
// console.log(sortedByName);

//*_____________________________________________
//*==============      flatMap


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// //* БУЛО
// // const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags],
// // []);

// //* АБО
// // const tags = tweets.map(t => t.tags).flat();

// //* = СТАЛО
// const tags = tweets.flatMap(t => t.tags);

// console.log(tags)


//*_____________________________________________
//*==============      chaining

// const numbers = [5, 10, 15, 20, 25];

// const sorted = numbers
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a, b) => a - b);


// console.log(sorted);

//*_____________________________________________

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false, rank: 800 },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true, rank: 600 },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true, rank: 100 },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false, rank: 400 },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true, rank: 500 },
];

const onlineAndSorted = players
.filter(player => player.online)
.sort((playerA, playerB) => playerA.rank - playerB.rank)

console.log(onlineAndSorted);

// ┌─────────┬────────────┬───────────┬────────────┬────────┬──────┐ 
// │ (index) │     id     │   name    │ timePlayed │ online │ rank │ 
// ├─────────┼────────────┼───────────┼────────────┼────────┼──────┤ 
// │    0    │ 'player-3' │  'Kiwi'   │    230     │  true  │ 100  │ 
// │    1    │ 'player-5' │ 'Chelsey' │     80     │  true  │ 500  │ 
// │    2    │ 'player-2' │  'Poly'   │    470     │  true  │ 600  │ 
// └─────────┴────────────┴───────────┴────────────┴────────┴──────┘ 

//*_____________________________________________
//*==============      instead of get, instead of if

const user = {
  name: "mango"
}
console.log(user?.name);

//*_____________________________________________
//*==============      xxx
