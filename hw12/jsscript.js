// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

const posts = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(postsApi => {
        for (const post of postsApi) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let userIdDiv = document.createElement('div');
            let idDiv = document.createElement('div');
            let titleDiv = document.createElement('div');
            let bodyDiv = document.createElement('div');

            idDiv.innerText = post.id;
            titleDiv.innerText = post.title;
            bodyDiv.innerText = post.body;
            userIdDiv.innerText = post.userId;

            postDiv.append(userIdDiv, idDiv, titleDiv, bodyDiv);
            posts.appendChild(postDiv);

        }
    })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const comments = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(commentsApi => {
        for (const comment of commentsApi) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            let postIdDiv = document.createElement('div');
            let idDiv = document.createElement('div');
            let nameDiv = document.createElement('div');
            let emailDiv = document.createElement('div');
            let bodyDiv = document.createElement('div');

            commentDiv.append(postIdDiv, idDiv, nameDiv, bodyDiv, emailDiv);
            comments.appendChild(commentDiv);

            postIdDiv.innerText = comment.postId;
            idDiv.innerText = comment.id;
            nameDiv.innerText = comment.title;
            emailDiv.innerText = comment.email;
            bodyDiv.innerText = comment.body;Я

        }
    })

