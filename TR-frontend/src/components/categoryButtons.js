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
            console.log(this.dataset.id);
            // debugger;
            cat.innerHTML = "";
            gifDiv.innerHTML = "";
            fetchTrivia(this.dataset.id);
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