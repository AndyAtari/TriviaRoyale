const BACKEND_URL = 'http://localhost:3000';
const api = new ApiService(BACKEND_URL);
const buttonContainer = document.getElementById("button-container");
const gifDiv = document.getElementById("gif-container");
const cat = document.getElementById("category-container");
const countdown = document.getElementById("countdown");
const flip = document.getElementById("flip-container");



document.addEventListener("DOMContentLoaded", function() {
    startScreen();
})

function startScreen() {
    Game.getAll();
    HighScoreBoard.getAll();
    createNewGameGif();
    reverseButton();
    reverseOrder();
}

function createNewGameGif() {
    const img = document.createElement("img");
    img.src = "https://media.giphy.com/media/UPnh9cDVFVZ2E/giphy.gif"
    gifDiv.appendChild(img);
}

function createSubmitButton() {
    buttonContainer.innerHTML = ""
    const btn = document.createElement("button");
    btn.className = "button-submit";
    btn.id = "submitQuizButton";
    btn.innerText = "Submit?";
    buttonContainer.appendChild(btn)
    } 

function reverseButton() {
    const btn = document.createElement("button");
    btn.id = "reverseButton";
    btn.innerText = "Flip Order?";
    flip.appendChild(btn);
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

function reverseOrder() {
    
    const reverse = document.getElementById("reverseButton");
    const highScoreTable = document.getElementById("high-score")

    reverse.addEventListener("click", function() {
        highScoreTable.innerHTML = "";
        highScoreTable.innerHTML = `
        <caption>HIGH SCORES</caption>
            <tr>
               <th>NAME</th>
               <th>SCORE</th>
            </tr>`
        let scoreBoard = HighScoreBoard.all 
        let newScoreBoard = scoreBoard[0];
        let sortedBoard = newScoreBoard.sort().reverse();
        sortedBoard.forEach((board) => {
            const tr = document.createElement("tr");
            tr.innerHTML += `
            <td>${board.user}</td>
            <td>${board.score}</td>
            `
            highScoreTable.appendChild(tr);
        })
    })
}















   










