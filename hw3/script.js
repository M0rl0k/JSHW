// Task 1

for (i = 0; i < 10; i++) {
    document.write('<div>Lorem ipsum.</div>')
}

// Task 2

for (i = 1; i <11; i++) {
    document.write(`<div>Lorem ipsum. ${i}</div>`)
}

// Task 3

let x = 0;
while (x < 10){
     document.write('<h1>Lorem ipsum dolor.</h1>')


    x++;
}

x = 1;
while (x < 11){
    document.write(`<h1>Lorem ipsum dolor. ${x}</h1>`)

    x++;
}

// Task 4

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (let y = 0; y < listOfItems.length; y++){
    document.write(`<li>${listOfItems[y]}</li>`)
}
    document.write('</ul>')

// Task 5


let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let z = 0; z < products.length; z++) {
    let product = products[z];
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
    </div>`)
}