class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllCategories = () => fetch(`${this.baseURL}/categories`).then(response => response.json())
}