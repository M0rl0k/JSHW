const wrap = document.getElementsByClassName('wrap')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            const userId = document.createElement('div');
            const userName = document.createElement('h3')
            const detailButton = document.createElement('button')
            const userLink = document.createElement('a');

            userId.innerText = `User ID : ${user.id}`;
            userName.innerText = `User Name : ${user.name}`;
            userLink.innerText = 'Show user details'
            userLink.href = `user-details.html?user=${user.id}`;
            userLink.onclick = function (){
                sessionStorage.setItem('User', JSON.stringify(user));
            }

            userDiv.append(userName, userId, detailButton)
            detailButton.appendChild(userLink)
            wrap.appendChild(userDiv)

        }
    });

