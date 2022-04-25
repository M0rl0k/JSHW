// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectSq (num1, num2) {
    let result = num1 * num2;
    console.log(result)
}
rectSq(10, 15)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSq(num) {
    let result = Math.PI * Math.pow(num, 2);
    console.log(result)
}

circleSq(20)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilSq(num1, num2) {
    let result = 2 * Math.PI * num1 * num2;
    console.log(result)
}

cilSq(5,15)

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [10, 20, 30, 40, 50, 60];

function logger(arr) {
    console.log(arr)
}

logger(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragMaker(txt) {
    document.write(`<p>txt</p>`)
}

paragMaker('Lorem ipsum.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function liMaker(txt) {
    document.write(`<ul>
    <li>${txt}</li>
    <li>${txt}</li>
    <li>${txt}</li>
</ul>`)
}

liMaker('Lorem ipsum dolor.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liMakerCustom(txt, quantity) {
    document.write(`<ul>`)
    for (i = 1; i <= quantity; i++){
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}


liMakerCustom("Lorem ipsum dolor.", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let simplArr = [10, 40, true, true, 'js', false, 'okten'];

function arrLister(arr) {
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)

}

arrLister(simplArr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 29, name: 'vasya', age: 20},
    {id: 22, name: 'illya', age: 23},
    {id: 37, name: 'olya', age: 21},
    {id: 76, name: 'vika', age: 26}
]

function arrObjDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

arrObjDisplay(users)

// - створити функцію яка повертає найменьше число з масиву

let numbers = [23, 34, 15, 98, 56, 31, 2, 9, 85, 36, 7, 1, -2]

function minNum(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum)
            minNum = arr[i];
    }
    document.write(`<div>${minNum}</div>`);
}

minNum(numbers)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function calculate(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        summ += arrElement

    }
    document.write(`<div>${summ}</div>`)
}

calculate(numbers)