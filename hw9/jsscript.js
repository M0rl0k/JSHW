// Все робити за допомоги js.
// - створити блок,

let startBlock = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

startBlock.classList.add('wrap');
startBlock.classList.add('collapse');
startBlock.classList.add('alpha');
startBlock.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

startBlock.style.backgroundColor = 'silver';
startBlock.style.color = 'blue';
startBlock.style.fontSize = '24px';

// - додати цей блок в body.

document.body.appendChild(startBlock);

// - клонувати його повністю, та додати клон в body.

let startBlockClone = startBlock.cloneNode();

document.body.appendChild(startBlockClone);


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `Course: ${course.title} / Duration: ${course.monthDuration}`;
    document.body.appendChild(block);
}


//
// - Є масив
let coursesAndDuration = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const item of coursesAndDuration) {
    let wrap = document.createElement('div');
    wrap.classList.add('item');
    document.body.appendChild(wrap);

    let header = document.createElement('h1');
    header.classList.add('headding');
    header.innerText = `${item.title}`
    wrap.append(header);

    let par = document.createElement('p');
    par.classList.add('description');
    par.innerText = `${item.monthDuration}`;
    wrap.append(par);
}