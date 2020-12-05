const BACKEND_URL = 'http://localhost:3000';
const api = new ApiService(BACKEND_URL);
Game.getAll();
HighScoreBoard.getAll();

const buttonContainer = document.getElementById("button-container");
const gifDiv = document.getElementById("gif-container");
const cat = document.getElementById("category-container");
const main = document.querySelector("main");
const card = document.getElementById("card");
const scoreDiv = document.getElementById("score-container");
const countdown = document.getElementById("countdown");



document.addEventListener("DOMContentLoaded", function() {

function createNewGameGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/UPnh9cDVFVZ2E/giphy.gif"
    gifDiv.appendChild(img);
}

createNewGameGif();

})

function renderGameOverGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/XI1SdG5Tzcnkcvah3Z/giphy.gif"
    gifDiv.appendChild(img);
}

// let randomNum = Math.floor(Math.random()*3)+1;

// function createSubmitButton() {
//     buttonContainer.innerHTML = ""
//     const btn = document.createElement("button");
//     btn.className = "button-submit";
//     btn.innerText = "Submit?";
//     buttonContainer.appendChild(btn)
// }



// function fetchTrivia(category) {

//     let randomNum = Math.floor(Math.random()*9)+1;

//     fetch(`${BACKEND_URL}/categories/${category}/questions/${randomNum}`)
//     .then(response => response.json())
//     .then(putsTriviaOnPage);
    
//     }




// function putsTriviaOnPage(question) {
        // main.innerHTML += `
        // <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
        // <p>${question.answer_a}<input type="radio" name="answer"  value="${question.answer_a}">
        // <p>${question.answer_b}<input type="radio" name="answer"  value="${question.answer_b}"></p>
        // <input type="hidden" id="correct-answer" name="correct_answer" value="${question.correct_answer}">
        // </div>`
    
//         createSubmitButton();
//     }


// function renderBRGif() {
//     const img = document.createElement("img");
//     img.src = "https://media.giphy.com/media/kEdI683LJtrGmTVVCM/giphy.gif"
//     gifDiv.appendChild(img);

// }


   

// buttonContainer.addEventListener("click", function(e) {

//     if (e.target.className === "button-submit") {
//         check();
//         main.innerHTML = "";
//     }
//     if (e.target.className === "button-continue") {
//         gifDiv.innerHTML = "";
//         fetchTrivia();
//     }
//     if (e.target.className === "button-ng") {
//         // const catInput = document.querySelector("input:checked").value;
//         cat.innerHTML = "";
//         gifDiv.innerHTML = "";
//         fetchTrivia();
//     }
// })



// function createSubmitButton() {
//         buttonContainer.innerHTML = ""
//         const btn = document.createElement("button");
//         btn.className = "button-submit"; hide
//         btn.innerText = "Submit?";
//         buttonContainer.appendChild(btn)
// }

// function createNextButton() {
//         buttonContainer.innerHTML = "";
//         const NextBtn = document.createElement("button");
//         NextBtn.className = "button-continue";
//         NextBtn.innerText = "Continue to Extraction?";
//         buttonContainer.appendChild(NextBtn);
// }

// function check() {
//     let checkedValue = document.querySelector("input:checked").value;
//     let correctAnswer = document.getElementById("correct-answer").value;
//     if (checkedValue === correctAnswer) {
//         renderBRGif();
//         createNextButton();
//     }
//     else {
//         renderGameOverGif();
//         buttonContainer.innerHTML = "";
//         // setTimeout("location.reload(true);", 5000);
//     }
    
//     }

    
//     // api.getAllCategories().then(renderCategories);
//     createNewGameGif();
//     // CategoryButton.getAll();

// })
