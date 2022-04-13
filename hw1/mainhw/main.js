let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);

document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);
document.write(j);
document.write(k);
document.write(l);
document.write(m);

let book1 = {
    name: 'bookname',
    pages: 250,
    genre: 'fantasy'
};

let book2 = {
    name:'bookname2',
    pages: 350,
    genre: 'action',
    authors: [
        'author1', 'author2', 'author3', 'author4'
    ]
};

let firstName = 'svyatoslav';
let middleName = 'borisovich';
let secondName = 'kachkan';

console.log(secondName + ' ' + firstName + ' ' + middleName);


let name = prompt('Enter Your Name');
console.log(name);

let second_name = prompt('Enter Your Second Name');
console.log(second_name);

let birthYear = prompt('In what year You were born ?');
console.log(birthYear);

let a1 = 100;
let b1 = '100';
let c1 = true;

console.log(typeof a1)
console.log(typeof b1)
console.log(typeof c1)


let books = [
    {name: 'book1', pages: 200, genre: 'fantasy', authors: 'author1, author2'},
    {name: 'book2', pages: 300, genre: 'action', authors: 'author3, author4'},
    {name: 'book3', pages: 250, genre: 'horror', authors: 'author5, author6'},
    {name:'book4', pages: 215, genre: 'comedy', authors: 'author7, author8'}
];


console.log(books[0])
console.log(books[1])
console.log(books[2])
console.log(books[3])

//або ось так, якщо я все вірно розумію

// console.log(books[0], books[1], books[2], books[3]);