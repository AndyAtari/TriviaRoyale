class CategoryButton {

    static main = document.querySelector("main");
    static all = []
    static currentQuestion = 0
    constructor(category) {
        this.category = category 
        this.renderCard();
        this.attachEventListener();
        this.constructor.all.push(this)
        console.log(category)
    }

    static renderCurrentQuestion(){
        const question = this.all[this.currentQuestion]
        this.render(question)
        this.currentQuestion ++
       // if the game is over 
       //     new ScoreForm(totalScore)

    }

    // static getAll() {
    // api.getAllCategories().then((categories) => 
    //     categories.forEach((category) => new CategoryButton(category)))
    // }

    attachEventListener() {
        this.card.addEventListener("click", (e) => this.handleOnClick(e)) 
    }

        handleOnClick = function(e) {
            if(e.target.className === "button-category"){
            const id = e.target.dataset.id 
            console.log(e.target.dataset.id);
            cat.innerHTML = "";
            gifDiv.innerHTML = "";
            api.fetchTrivia(id).then((question) => 
            this.constructor.main.innerHTML += `
        <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
        <p>${question.answer_a}<input type="radio" name="answer"  value="${question.answer_a}">
        <p>${question.answer_b}<input type="radio" name="answer"  value="${question.answer_b}"></p>
        <input type="hidden" id="correct-answer" name="correct_answer" value="${question.correct_answer}">
        </div>`)
            }
            
        }

        

        
    

    renderCard() {
        const card = document.createElement("div");
        card.className = "card";
        this.card = card;
        this.renderCategories();
        cat.appendChild(card)
    }

    // renderCategories() {
    //     this.card.innerHTML += `
    //     <button class="button-category" data-id=${this.category.id} type="button">${this.category.name}</button>
    //     `
    //     }
    

    
}