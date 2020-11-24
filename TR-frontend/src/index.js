console.log("testing...")

const BACKEND_URL = 'http://localhost:3000';
const main = document.querySelector("main");

fetch(`${BACKEND_URL}/questions`)
    .then(response => response.json())
    .then(putsTriviaOnPage);

function putsTriviaOnPage(questions){
    questions.forEach(question => {
        main.innerHTML += `
        <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
        <p>${question.answers}<input type="radio" name="answer" value="${question.answers}">
        <p>${question.correct_answer}<input type="radio" name="answer" value="${question.correct_answer}"></p>
        </div>`
    })
}