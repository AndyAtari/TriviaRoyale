class CategoryButton {
    constructor(category) {
        this.category = category 
        this.renderCategories();
        
    }

    static getAll() {
    // api.getAllCategories().then(renderCategories());
    api.getAllCategories().then((categories) => 
        categories.forEach((category) => new CategoryButton(category)))
    }

    renderCategories() {
        cat.innerHTML += `<li>${this.category.name} <input type="radio" name="category" value="${this.category.id}"></li>`
        }
    

}