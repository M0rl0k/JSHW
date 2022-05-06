// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hw = 'hello world';
let li = 'lorem ipsum';
let js = 'javascript is cool';

console.log(hw.length);
console.log(li.length);
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(hw.toUpperCase());
console.log(li.toUpperCase());
console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

hw = 'HELLO WORLD';
li = 'LOREM IPSUM';
js = 'JAVASCRIPT IS COOL';

console.log(hw.toLowerCase());
console.log(li.toLowerCase());
console.log(js.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';

console.log(dirtyString.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

let arr = str.split(' ');


//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let nums = [10,8,-7,55,987,-1011,0,1050,0];

let stringNums = nums.map(function (value) {
    let numCopy = value;
    let stringNum = numCopy.toString();
    return stringNum;
})

console.log(stringNums);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums2 = [11,21,3,5,4,7,55];

const sortNums = (arr, direction) => {
  if (direction === 'ascending'){
      let ascNums = arr.sort((num1, num2) => num1 - num2);
      return ascNums
  }
  if (direction === 'descending'){
      let desNums = arr.sort((num1, num2) => num2 - num1);
      return desNums
  }
}

//
// - є масив,
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// описати колоду карт
let deck = [
    {cardSuit: 'spade', value : '6', color : 'black'},
    {cardSuit: 'spade', value : '7', color : 'black'},
    {cardSuit: 'spade', value : '8', color : 'black'},
    {cardSuit: 'spade', value : '9', color : 'black'},
    {cardSuit: 'spade', value : '10', color : 'black'},
    {cardSuit: 'spade', value : 'ace', color : 'black'},
    {cardSuit: 'spade', value : 'jack', color : 'black'},
    {cardSuit: 'spade', value : 'queen', color : 'black'},
    {cardSuit: 'spade', value : 'king', color : 'black'},
    {cardSuit: 'clubs', value : '6', color : 'black'},
    {cardSuit: 'clubs', value : '7', color : 'black'},
    {cardSuit: 'clubs', value : '8', color : 'black'},
    {cardSuit: 'clubs', value : '9', color : 'black'},
    {cardSuit: 'clubs', value : '10', color : 'black'},
    {cardSuit: 'clubs', value : 'ace', color : 'black'},
    {cardSuit: 'clubs', value : 'jack', color : 'black'},
    {cardSuit: 'clubs', value : 'queen', color : 'black'},
    {cardSuit: 'clubs', value : 'king', color : 'black'},
    {cardSuit: 'diamond', value : '6', color : 'red'},
    {cardSuit: 'diamond', value : '7', color : 'red'},
    {cardSuit: 'diamond', value : '8', color : 'red'},
    {cardSuit: 'diamond', value : '9', color : 'red'},
    {cardSuit: 'diamond', value : '10', color : 'red'},
    {cardSuit: 'diamond', value : 'ace', color : 'red'},
    {cardSuit: 'diamond', value : 'jack', color : 'red'},
    {cardSuit: 'diamond', value : 'queen', color : 'red'},
    {cardSuit: 'diamond', value : 'king', color : 'red'},
    {cardSuit: 'heart', value : '6', color : 'red'},
    {cardSuit: 'heart', value : '7', color : 'red'},
    {cardSuit: 'heart', value : '8', color : 'red'},
    {cardSuit: 'heart', value : '9', color : 'red'},
    {cardSuit: 'heart', value : '10', color : 'red'},
    {cardSuit: 'heart', value : 'jack', color : 'red'},
    {cardSuit: 'heart', value : 'queen', color : 'red'},
    {cardSuit: 'heart', value : 'ace', color : 'red'},
    {cardSuit: 'heart', value : 'king', color : 'red'},
    {value : 'joker', color : 'red'},
    {value : 'joker', color : 'black'},
];
// - знайти піковий туз
console.log(deck.filter(card => card.value === "ace" && card.cardSuit === 'spade'));
// - всі шістки
console.log(deck.filter(card => card.value === '6'));
// - всі червоні карти
console.log(deck.filter(card => card.color === 'red'));
// - всі буби
console.log(deck.filter(card => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(deck.filter(card => card.cardSuit === 'clubs' && card.value > '9'));
