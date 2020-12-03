class Game {
   
   

    constructor(trivia) {
        this.trivia = trivia
        this.renderCategories()
        this.attachEventListener();

    }

    static getAll() {
        api.getAllQuestions().then((questions) => new Game(questions))
    }
       
    renderCategories() {
        
        this.trivia.forEach(function(trivia) { 
            cat.innerHTML += `
            <button class="button-category" data-id=${trivia.id} type="button">${trivia.name}</button><br>
            `      
        })
    }

    attachEventListener() {
        cat.addEventListener("click", (e) => this.handleOnClick(e))
    }

    handleOnClick(e) {
        if(e.target.className === "button-category"){
            const id = e.target.dataset.id
            const round = this.trivia[`${id}`-1]
            const quiz = round.questions
            cat.innerHTML = "";
            gifDiv.innerHTML = "";
            quiz.forEach((question) => this.renderQuestions(question))
            this.createSubmitButton();
        } 
    }

    renderQuestions(question) {
            console.log(question)

            main.innerHTML += `
            <div class="card" data-id="${question.id}"><p>${question.trivia}</p>
            <p>${question.answer_a}<input type="radio" name="answer" value="${question.answer_a}">
            <p>${question.answer_b}<input type="radio"  name="answer" value="${question.answer_b}"></p>
            <input type="hidden" id="correct-answer" name="correct_answer" value="${question.correct_answer}">
            </div>`
    }

    createSubmitButton() {
        buttonContainer.innerHTML = ""
        const btn = document.createElement("button");
        btn.className = "button-submit";
        btn.innerText = "Submit?";
        buttonContainer.appendChild(btn)
        } 

}