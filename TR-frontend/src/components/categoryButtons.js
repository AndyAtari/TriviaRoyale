class CategoryButton {
    constructor(category) {
        this.category = category 
        this.renderCard();
        console.log(this)
    }

    static getAll() {
    // api.getAllCategories().then(renderCategories());
    api.getAllCategories().then((categories) => 
        categories.forEach((category) => new CategoryButton(category)))
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
        this.card.innerHTML += `<li>${this.category.name} <input type="radio" name="category" value="${this.category.id}"></li>`
        }
    

    
}