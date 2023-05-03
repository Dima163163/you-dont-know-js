const bookList = document.querySelectorAll(".books");
const bookElems = document.querySelectorAll(".book");

console.log(bookList);
console.log(bookElems);

// Восстановить порядок книг
bookElems[0].before(bookElems[1]);
bookElems[2].before(bookElems[4]);
bookElems[2].before(bookElems[3]);
bookElems[2].before(bookElems[5]);

//Заменить картинку фона на другую
const bodyImage = document.querySelector("body");
bodyImage.style.backgroundImage = `url('image/you-dont-know-js.jpg')`;

//Исправить заголовок в книге 3
const book3 = bookElems[4];

const titleBook3 = book3.querySelector("h2 > a");

titleBook3.textContent = "Книга 3. this и Прототипы Объектов";

//Удалить рекламму со страницы
const advt = document.querySelector(".adv");

advt.remove();

//Восстановить порядок глав во 2 и 5 книге
//Книга №2
const book2 = bookElems[0];

book2List = book2.querySelectorAll("ul > li");

console.log(book2List);

book2List[9].after(book2List[2]);
book2List[8].after(book2List[7]);
book2List[3].after(book2List[6]);
book2List[4].before(book2List[8]);

//Книга №5
const book5 = bookElems[5];
book5List = book5.querySelectorAll("ul > li");
console.log(book5List);

book5List[2].before(book5List[9]);
book5List[4].after(book5List[2]);

//В шестой книге добавить глау №8
const book6 = bookElems[2];
const book6List = book6.querySelectorAll("ul > li");
const newSection = book6List[7].cloneNode(true);
newSection.textContent = "Глава 8: За пределами ES6";

book6List[8].append(newSection);

console.log(book6List);
