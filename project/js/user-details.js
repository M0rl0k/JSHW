const user = JSON.parse(sessionStorage.getItem('User'));
console.log(user)

const {
    id,
    name,
    username,
    email,
    address: {street, suite, city, zipcode, geo: {lat, lng}},
    phone,
    website,
    company: {name:companyName, catchPhrase, bs}
} = user;

const wrap = document.getElementsByClassName('wrap')[0];
const userDiv = document.getElementsByClassName('userDiv')[0];
const h3 = document.createElement('h3');
const p = document.createElement('p');
const button = document.createElement('button');

button.classList.add('button')

h3.innerText = `ID: ${id}, Name: ${name}, User Name: ${username}`;
p.innerText = `
    Email: ${email},
    Phone: ${phone},
    Website: ${website},
    Address: 
    Street: ${street},
    Suite: ${suite},
    City: ${city},
    Zipcode: ${zipcode},
    Geo: 
    lat: ${lat},
    lng: ${lng},
    Company:
    name: ${companyName},
    catchPhrase: ${catchPhrase},
    bs: ${bs}
`;

userDiv.append(h3, p, button);

const postOfuser = document.createElement('div');
postOfuser.classList.add('posts');

button.innerText = 'Posts of current user'
button.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                const postBtn = document.createElement('button');
                postBtn.classList.add('postBtn');
                const postLink = document.createElement('a');
                postLink.innerText = 'Post Details'
                postLink.href = `post-details.html?post=${post.id}`
                postLink.onclick = function (){
                    sessionStorage.setItem('Post', JSON.stringify(post));
                }

                postDiv.innerText = `${post.title}`

                wrap.appendChild(postOfuser);
                postOfuser.appendChild(postDiv);
                postDiv.appendChild(postBtn);
                postBtn.appendChild(postLink);
            }
        })
};

