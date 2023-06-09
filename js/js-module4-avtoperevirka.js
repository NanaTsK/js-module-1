//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 1


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);



//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza));
// //повертає рядок "Delivering Ultracheese pizza."

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) { 
//     console.log(`Eating pizza ${pizzaName}`)
// });


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 4

//   const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//       if (!pizzaPalace.pizzas.includes(pizzaName)) { 
//           return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//         return onSuccess(pizzaName);
//   },
//   };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 5 - перебирання масиву, forEach

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
    
    orderedItems.forEach(function (item, index) {
            totalPrice += orderedItems[index];
    });
    //*АБО
    //  orderedItems.forEach(function (number) {
    //     totalPrice += number;
    //   });

  // Change code above this line
  return totalPrice;
}

console.log( calculateTotalPrice([12, 85, 37, 4]));
//повертає 138
console.log( calculateTotalPrice([164, 48, 291]));
//повертає 503
console.log( calculateTotalPrice([412, 371, 94, 63, 176]));
//повертає 1116


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 6 - Фільтрація масиву чисел

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
    //* was:
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
    //* became:

    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number)
        }    });

  // Change code above this line
  return filteredNumbers;
}

console.log( filterArray ([1, 2, 3, 4, 5], 3));
//повертає [4, 5]
console.log( filterArray([1, 2, 3, 4, 5], 4));
//повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5));
//повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38));
//повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));
//повертає [24, 41, 76]

//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 7





//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 8


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 9


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ 10


//* ++++++++++++++++++++++++++++++++++++++++++++
// * ЗАВДАННЯ x