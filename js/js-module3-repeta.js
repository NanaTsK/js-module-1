// * SPREAD

const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25


// ********
const temps1 = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps1];
console.log(copyOfTemps);

// *******
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];

console.log(allTemps); // 

// *******
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }





//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++
