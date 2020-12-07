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
const form = document.getElementById("form-container");


document.addEventListener("DOMContentLoaded", function() {

function createNewGameGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/UPnh9cDVFVZ2E/giphy.gif"
    gifDiv.appendChild(img);
}

createNewGameGif();

})

function createSubmitButton() {
    buttonContainer.innerHTML = ""
    const btn = document.createElement("button");
    btn.className = "button-submit";
    btn.id = "submitQuizButton";
    btn.innerText = "Submit?";
    buttonContainer.appendChild(btn)
    } 

function renderGameOverGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/XI1SdG5Tzcnkcvah3Z/giphy.gif"
    gifDiv.appendChild(img);
}

function renderHighScoreButton() {
        buttonContainer.innerHTML = ""
        const btn = document.createElement("button");
        btn.className = "button-highScore";
        btn.id = "save-score";
        btn.innerText = "Save Name & High Score?";
        buttonContainer.appendChild(btn)
}

function renderForm() {
    buttonContainer.innerHTML = "";
    const form = document.getElementById("form-container");
    form.innerHTML = `
    <div id="player-form">
    <label for="new-player">Player Name:</label>
    <input type="text" id="new-player" name="new-player" placeholder="High Score Name!">
    </div>`
}











   










