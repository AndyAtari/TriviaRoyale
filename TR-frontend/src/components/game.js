class Game {
    constructor(trivia) {
        this.trivia = trivia
        console.log(this)
    }

    static getAll() {
        api.getAllQuestions().then((questions) => new Game(questions))
    }
        


}