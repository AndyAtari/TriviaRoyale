class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllQuestions = () => fetch(`${this.baseURL}/questions`).then(resp => resp.json());

    // getAllCategories = () => fetch(`${this.baseURL}/categories`).then(response => response.json())

    // fetchTrivia = (id) => fetch(`${this.baseURL}/categories/${id}/questions/${randomNum}`)
    // .then(response => response.json())
    
}