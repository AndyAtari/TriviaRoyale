class CategoryButton {
    constructor(category) {
        this.category = category 
        this.renderCard();
        this.attachEventListener();
    }

    static getAll() {
    api.getAllCategories().then((categories) => 
        categories.forEach((category) => new CategoryButton(category)))
    }

    attachEventListener() {
        this.card.addEventListener("click", this.handleOnClick) 
    }

        handleOnClick = function(e) {
            if(e.target.className === "button-category"){
            const id = this.dataset.id 
            console.log(this.dataset.id);
            cat.innerHTML = "";
            gifDiv.innerHTML = "";
            api.fetchTrivia(id).then((question) => 
            main.innerHTML += `
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
        card.dataset.id = this.category.id;
        this.card = card;
        this.renderCategories();
        cat.appendChild(card)
    }

    renderCategories() {
        this.card.innerHTML += `
        <button class="button-category" type="button">${this.category.name}</button>
        `
        }
    

    
}