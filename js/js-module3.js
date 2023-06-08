// * МЕТОД hasOwnProperty()


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}


//* ++++++++++++++++++++++++++++++++++++++++++++

// * МЕТОД Object.keys()
const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book2);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book2[key]);
}

//* ++++++++++++++++++++++++++++++++++++++++++++
//* Масив об'єктів

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}


//* ++++++++++++++++++++++++++++++++++++++++++++

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
//* ++++++++++++++++++++++++++++++++++++++++++++

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++
