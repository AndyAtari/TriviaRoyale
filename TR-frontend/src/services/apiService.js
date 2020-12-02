class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllCategories = () => fetch(`${this.baseURL}/categories`).then(response => response.json())

    fetchTrivia = (id) => fetch(`${this.baseURL}/categories/${id}/questions/${randomNum}`)
    .then(response => response.json())
    
}