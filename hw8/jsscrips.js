// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const content = document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"

const rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, mollitia?';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Lorem ipsum dolor sit amet.';

// -- змініть кожному елементу колір фону на червоний

const elements = document.body.children;

for (const element of elements) {
    element.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const element of elements) {
    element.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

const rulesClasses = rules.classList;

for (const rulesClass of rulesClasses) {
    console.log(rulesClass);
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const fcRulesItems = document.getElementsByClassName('fc_rules');

for (const fcRulesItem of fcRulesItems) {
    fcRulesItem.style.color = 'red';
}