class HighScoreBoard {

    constructor(scores) {
        this.scores = scores;
        this.renderScoreBoard();
    }
    
    static getAll() {
        api.getAllScores().then((scores) => console.log(scores))
    }

    renderScoreBoard() {
        this.scores.forEach(function(score) {
            
        })

    }

}  