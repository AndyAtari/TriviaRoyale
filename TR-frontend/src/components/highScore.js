class HighScoreBoard {

    constructor(scores) {
        this.scores = scores;
        this.renderScoreBoard();
        this.attachEventListener();
    }
    
    static getAll() {
        api.getAllScores().then((scores) => new HighScoreBoard(scores))
    }

    renderScoreBoard() {
        this.scores.forEach(function(score) {
            const highScoreTable = document.getElementById("high-score")
            let tr = document.createElement("tr");
            tr.innerHTML += `
            <td>${score.user}</td>
            <td>${score.score}</td>
            `
            highScoreTable.appendChild(tr);
        })

    }

    attachEventListener() {
        buttonContainer.addEventListener("click", this.handleOnClick);
    }

    handleOnClick = (event) => {
            // if (event.target.className === "button-submit") {
            //     const userScoreDiv = document.getElementById("user-score")
            //     const finalScore = userScoreDiv.getAttribute("data-id")
            //     console.log(finalScore)
            // }
    }

}  