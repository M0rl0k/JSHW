// Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectSq = (a, b) => a * b;

console.log(rectSq(10, 20));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

const circlSq = (radius) => Math.PI * Math.pow(radius, 2);

console.log(circlSq(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cilinderSq = (height, radius) => 2 * Math.PI * height * radius;

console.log(cilinderSq(5, 15));

//- створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {id: 29, name: 'vasya', age: 20},
    {id: 22, name: 'illya', age: 23},
    {id: 37, name: 'olya', age: 21},
    {id: 76, name: 'vika', age: 26}
]

let logger = (arr) => {
    for (let item of arr) {
        console.log(item);
    }
};

logger(users);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

const parMaker = (txt) => {
  document.write(`<p>${txt}</p>`)
}

parMaker('Lorem ipsum dolor.');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const liCreator = (txt) => {
    document.write(`<ul>
    <li>${txt}</li>
    <li>${txt}</li>
    <li>${txt}</li>
</ul>`)
}

liCreator('Lorem ipsum.');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const liMaker = (txt, quantity) => {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

liMaker('Lorem ipsum dolor sit.', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let simplArr = [10, 40, true, true, 'js', false, 'okten'];

const visualiser = (arr) => {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

visualiser(simplArr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const iterator = (arr) => {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item.id} ${item.name} ${item.age}</li>`)
    }
    document.write(`</ul>`)
}

iterator(users);

//- створити функцію яка повертає найменьше число з масиву

let numbers = [23, 34, 15, 98, 56, 31, 2, 9, 85, 36, 7, 1, -2];

const minNum = (arr) => {
    let minNum = arr[0]
    for (const number of arr) {
        if (minNum > number) {
            minNum = number;
        }
    }
    return minNum;
}

console.log(minNum(numbers));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sum = (arr) => {
  let summ = 0;
    for (const item of arr) {
        summ += item;
    }
    return summ;
}

console.log(sum(numbers));


// Все стірлочними!!!!!!!!!

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const median = (arr) => {
    let summ = 0;
    for (const item of arr) {
        summ += item;
    }
    let lenght = arr.length;
    let median = summ / lenght;
    return median;
}

console.log(median(numbers));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)

const minMaxNumber = (...nums) => {
    let minNum = nums[0];
    let maxNum = nums[0];
    for (const num of nums) {
        if (minNum > num){
            minNum = num;
        } else if (maxNum < num){
            maxNum = num;
        }
    }
    console.log(maxNum)
    return minNum;

}

minMaxNumber(10, 25, 30, 46, 72, 385, -1, 15, 26, -10);

//створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let array = [];

const randomFiller = (arr) => {
    for (let i = 0; i < 100; i++) {
        let item = arr[i];
        item = Math.round(Math.random()*100);
        array.push(item)
    }
    return arr
}

console.log(randomFiller(array));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let secondArray = [];

const randomFillerCustom = (arr, limit) => {
    for (let i = 0; i < limit; i++) {
        let item = arr[i];
        item = Math.round(Math.random()*100);
        secondArray.push(item)
    }
    return arr
}

console.log(randomFillerCustom(secondArray, 30));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let targetArray = [];

const reverseFiller = (arr) => {
    for (let i = arr.length-1; i >= 0; i--) {
        const item = arr[i];
        targetArray.push(item)
    }
    return targetArray
}

console.log(reverseFiller(numbers));

//-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

let usersShort = [
    {id: 29, name: 'vasya', age: 20},
    {id: 22, name: 'illya', age: 23}];

// const swapper = (arr) => {
//   let plate = arr[0];
//   arr[0] = arr[1];
//   arr[1] = plate;
//   return arr
//

// const swapper = (arr) => [[arr[0],arr[1]]] = [[arr[1],arr[0]];

const swapper = (arr) => {
    arr.reverse
    return arr;
}


console.log(swapper(usersShort));