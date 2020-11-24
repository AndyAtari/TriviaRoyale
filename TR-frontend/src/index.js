document.addEventListener("DOMContentLoaded", function() {

document.addEventListener("click", function() {
 console.log(event.target.value)
})

const BACKEND_URL = 'http://localhost:3000';
const main = document.querySelector("main");

let randomNum = Math.floor(Math.random()*3)+1;

fetch(`${BACKEND_URL}/questions/${randomNum}`)
    .then(response => response.json())
    .then(putsTriviaOnPage);

function putsTriviaOnPage(question) {
    //questions.forEach(question => {
        main.innerHTML += `
        <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
        <p>${question.answer_a}<input type="radio" name="answer" value="${question.answer_a}">
        <p>${question.answer_b}<input type="radio" name="answer" value="${question.answer_b}"></p>
        </div>`
    }

})
