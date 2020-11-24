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
        <p>${question.answer_a}<input type="radio" name="answer" value="${question.answer_a}">
        <p>${question.answer_b}<input type="radio" name="answer" value="${question.answer_b}"></p>`
        if (question.answer_c !== null)
        `<p>${question.answer_c}<input type="radio" name="answer" value="${question.answer_c}"></p>
        <p>${question.answer_d}<input type="radio" name="answer" value="${question.answer_d}"></p>
        </div>`
    })
}