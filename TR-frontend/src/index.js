document.addEventListener("DOMContentLoaded", function() {

const BACKEND_URL = 'http://localhost:3000';
const main = document.querySelector("main");
const buttonContainer = document.getElementById("button-container");
const gifDiv = document.getElementById("gif-container");


function fetchTrivia() {
    let randomNum = Math.floor(Math.random()*3)+1;

    fetch(`${BACKEND_URL}/questions/${randomNum}`)
    .then(response => response.json())
    .then(putsTriviaOnPage);

}


function putsTriviaOnPage(question) {
        main.innerHTML += `
        <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
        <p>${question.answer_a}<input type="radio" name="answer" value="${question.answer_a}">
        <p>${question.answer_b}<input type="radio" name="answer" value="${question.answer_b}"></p>
        <input type="hidden" id="correct-answer" name="correct_answer" value=${question.correct_answer}>
        </div>`
        createSubmitButton();
    }

function renderBRGif() {
    // const gifDiv = document.getElementById("gif-container");
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/kEdI683LJtrGmTVVCM/giphy.gif"
    gifDiv.appendChild(img);

}

function renderGameOverGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/XI1SdG5Tzcnkcvah3Z/giphy.gif"
    gifDiv.appendChild(img);
}
   

buttonContainer.addEventListener("click", function(e) {
    if (e.target.className === "button1") {
        check();
        main.innerHTML = "";
        createNextButton();
    }
    if (e.target.className === "button2") {
        gifDiv.innerHTML = "";
        fetchTrivia();
    }
})

function createSubmitButton() {
        buttonContainer.innerHTML = ""
        const btn = document.createElement("button");
        btn.className = "button1";
        btn.innerText = "Submit?";
        buttonContainer.appendChild(btn)
}

function createNextButton() {
    buttonContainer.innerHTML = "";
    const NextBtn = document.createElement("button");
    NextBtn.className = "button2";
    NextBtn.innerText = "Continue to Extraction?";
    buttonContainer.appendChild(NextBtn);
}

function check() {
    let checkedValue = document.querySelector("input:checked").value;
    let correctAnswer = document.getElementById("correct-answer").value;
    if (checkedValue === correctAnswer) {
        renderBRGif();
    }
    else {
        renderGameOverGif();
    }
    
    }


fetchTrivia();


})
