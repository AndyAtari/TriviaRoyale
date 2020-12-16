class HighScoreBoard {

    constructor(scores) {
        this.scores = scores;
        this.renderScoreBoard();
        
    }
    
    static getAll() {
        api.getAllScores().then((scores) => new HighScoreBoard(scores))
    }

    renderScoreBoard() {
        this.scores.forEach(function(score) {
            const highScoreTable = document.getElementById("high-score")
            const tr = document.createElement("tr");
            tr.innerHTML += `
            <td>${score.user}</td>
            <td>${score.score}</td>
            `
            highScoreTable.appendChild(tr);
        })

    }

    static renderToScoreBoard() {
        const saveScore = document.getElementById("save-score");
        saveScore.addEventListener("click", function() {
            const userScoreDiv = document.getElementById("user-score");
            const newScore = userScoreDiv.getAttribute("data-id");
            const finalScore = parseInt(newScore);
            const userName = document.getElementById("new-player").value;
            api.updateScoreBoard(userName, finalScore);
            setTimeout("location.reload(true);", 500);
        })
    }
    

}  


