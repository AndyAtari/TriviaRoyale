class Game {
   
   

    constructor(trivia) {
        this.trivia = trivia
        this.renderCategories()
        this.attachEventListener();
        
    }

    startCountdown() {
        
        let countNumber = parseInt(countdown.innerText);
        

        setInterval(function() {
            countdown.innerText = countNumber--;
        }, 1000)
    }

    static getAll() {
        api.getAllQuestions().then((questions) => new Game(questions))
    }
       
    renderCategories() {
        
        this.trivia.forEach(function(trivia) { 
            cat.innerHTML += `
            <button class="button-category" data-id=${trivia.id} type="button">${trivia.name}</button><br>
            `      
        })
    }

    attachEventListener() {
        cat.addEventListener("click", (e) => this.handleOnClick(e))
    }

    handleOnClick(e) {
        if(e.target.className === "button-category"){
            const id = e.target.dataset.id
            const round = this.trivia[`${id}`-1]
            const quiz = round.questions
            cat.innerHTML = "";
            gifDiv.innerHTML = "";
            this.startCountdown();
            this.createSubmitButton();
            this.renderQuestions(quiz);
            
        } 
    }

    renderQuestions(questions) {
           
            for(let i=0; i<questions.length; i++){
            main.innerHTML += `
            <div class="card" data-id="${questions[i].id}"><p>${questions[i].trivia}</p>
            <div class="answers">
            <p>${questions[i].answer_a}<input type="radio" name="answer${[i]}" value="${questions[i].answer_a}">
            <p>${questions[i].answer_b}<input type="radio"  name="answer${[i]}" value="${questions[i].answer_b}"></p>
            <input type="hidden" id="correct-answer" name="correct_answer" value="${questions[i].correct_answer}">
            </div>
            </div>`
        }
           
            this.showScore(questions);
        }
    

    createSubmitButton() {
        buttonContainer.innerHTML = ""
        const btn = document.createElement("button");
        btn.className = "button-submit";
        btn.innerText = "Submit?";
        buttonContainer.appendChild(btn)
        } 
    
    showScore(questions) {
        buttonContainer.addEventListener("click", function(e) {
            if (e.target.className === "button-submit") {

        let timerBonus = parseInt(countdown.innerText);

        
        const answerContainer = document.querySelectorAll(".answers");
        
        let userAnswer = "";
        let score = 0;

        for(let i=0; i<questions.length; i++) {
            userAnswer = (answerContainer[i].querySelector('input[name=answer'+i+']:checked')||{}).value;

            if(userAnswer === questions[i].correct_answer) {
                score += 25;

                answerContainer[i].style.color = "green";
            }
            else {
                answerContainer[i].style.color = "red"; 
            }
        }

        let totalScore = score + timerBonus;

        scoreDiv.innerHTML = "YOUR SCORE : " + totalScore;
        renderGameOverGif();
         }
        })
    }

    
}
    
