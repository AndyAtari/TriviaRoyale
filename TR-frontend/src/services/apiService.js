class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllQuestions = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json());

    getAllScores = () => fetch(`${this.baseURL}/high_scores`).then(resp => resp.json());

    updateScoreBoard = (userName, finalScore) => fetch(`${this.baseURL}/high_scores`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: userName,
            score: finalScore
        })
     })
    .then(resp => resp.json());
    
}