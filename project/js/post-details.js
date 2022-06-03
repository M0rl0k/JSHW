const post = JSON.parse(sessionStorage.getItem('Post'));

const {
    userId,
    id,
    title,
    body
} = post;

const wrap = document.getElementsByClassName('wrap')[0];
const postDetails = document.getElementsByClassName('postdetails')[0];
const commentsDiv = document.getElementsByClassName('comments')[0];
const h3 = document.createElement('h3');
const p = document.createElement('p');

h3.innerText = `User ID: ${userId}, Post ID: ${id}, Title: ${title}`;
p.innerText = body;

postDetails.append(h3, p);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            const commentIdNameMail = document.createElement('h3');
            const commentBody = document.createElement('p');

            commentDiv.classList.add('comment');

            commentIdNameMail.innerText = `
            ID: ${comment.id}, Name: ${comment.name}, Email: ${comment.email}
            `;
            commentBody.innerText = comment.body;

            commentDiv.append(commentIdNameMail, commentBody);
            commentsDiv.appendChild(commentDiv);
        }
    });

