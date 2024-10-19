const baseUrl= "http://localhost:3000/results"
document.getElementById('start').addEventListener('click',() =>{
    fetch(baseUrl)
    .then(response => response.json())
    .then(results =>{
        results.forEach(quiz =>{
            displayQuiz(quiz)
        })
    

    })
    . catch(error => console.log(error));
})


function  displayQuiz(quiz){
    let getQuiz = document.getElementById('get-quiz')
    let quizContainer = document.createElement('div')

    quizContainer.classList.add("quiz-div")
    quizContainer.innerHTML = `
    <h2 id='category'>${quiz.category}</h2>
    <p>Type:${quiz.type}</p>
    <p>Difficulty:${quiz.difficulty}</p>
    <p>question:${quiz.question}</p>
    <form id='quiz-form-${quiz.id}'class="quiz-form">
    <input type="text" id="user-answer-${quiz.id}" placeholder="Enter your answer">
    <button type="submit">Submit</button>
    </form>
    <p id="result-${quiz.id}" class="result"></p></button>
 
    `
    getQuiz.appendChild(quizContainer);

const form=  document.querySelector(`#quiz-form-${quiz.id}`);
       
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userAnswer = document.getElementById(`user-answer-${quiz.id}`).value;
        const correctAnswer =  quiz.correct_answer.trim().toLowerCase();
        const result = document.getElementById(`result-${quiz.id}`);

        if (userAnswer.trim().toLowerCase() === correctAnswer) {
            result.textContent = `Correct! The incorrect answer is:${quiz.incorrect_answers}`;
            result.style.color = 'blue'
            
        }else {
            result.textContent = `Incorrect!The correct answer is: ${quiz.correct_answer}`;
            result.style.color = 'pink'
        }
form.reset()
    })
}




    


 

 





