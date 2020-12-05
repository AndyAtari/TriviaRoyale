class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllQuestions = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json());

    getAllScores = () => fetch(`${this.baseURL}/high_scores`).then(resp => resp.json());

    // updateScoreboard = (totalScore) => 
    
}