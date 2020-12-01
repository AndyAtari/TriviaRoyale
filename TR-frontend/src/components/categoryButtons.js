class CategoryButton {
    constructor(category) {
        this.category = category 
    }

    static getAll() {
    // api.getAllCategories().then(renderCategories);
    api.getAllCategories().then(data => console.log(data))
    }
}