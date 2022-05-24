// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const text = document.getElementById('text');

const button = document.getElementById('btn');

button.onclick = function () {
    text.remove()
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageInput = document.getElementById('input');

const submitBtn = document.getElementById('submit');

submitBtn.onclick = function () {
    if (ageInput.value < 18){
        alert("You must be older than 18 to watch this content");
    }
};

// - створити 2 форми  по 2 інпути в кожній. Створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const firstForm = document.form1;

const secondForm = document.form2;

const fetchBtn = document.getElementById('button');

fetchBtn.onclick = function () {
    console.log(firstForm.name.value);
    console.log(firstForm.secondName.value);
    console.log(secondForm.age.value);
    console.log(secondForm.city.value);
};

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const table = document.table;

const tableBox = document.createElement('table');

table.onsubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < table.rowCounter.value; i++){
        const trTag = document.createElement('tr');
        tableBox.appendChild(trTag);
            for (let j = 0; j < table.columnsCounter.value; j++){
                const tdTag = document.createElement('td');
                tdTag.innerText = table.content.value;
                tableBox.appendChild(tdTag);
            }
    }
    document.body.appendChild(tableBox);
}

