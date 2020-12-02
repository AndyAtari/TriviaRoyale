class Game {
    constructor(trivia) {
        this.trivia = trivia
        this.renderCategories()
        console.log(this)
    }

    static getAll() {
        api.getAllQuestions().then((questions) => new Game(questions))
    }
       
    renderCategories() {
        
        this.trivia.forEach(trivia => console.log(trivia.name))
        
        }


}