class CategoryButton {
    constructor(category) {
        this.category = category 
        this.renderCard();
        this.attachEventListener();
    }

    static getAll() {
    // api.getAllCategories().then(renderCategories());
    api.getAllCategories().then((categories) => 
        categories.forEach((category) => new CategoryButton(category)))
    }

    attachEventListener() {
        // console.log(this.card);
        this.card.addEventListener("click", this.handleOnClick) 
    }

        handleOnClick = function(e) {
            console.log(this);
            // debugger;
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