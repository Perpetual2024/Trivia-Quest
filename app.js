
const baseUrl = 'http://localhost:3000/results'
document.addEventListener('DOMContentLoaded',()=>{
    fetch(baseUrl)
    .then(response => response.json())
    .then(data =>{
        let getQuiz = document.getElementById('get-quiz')
        data.forEach(quiz =>{
            displayQuiz(quiz)
        })
        

    })
    . catch(error => console.log(error))
})
function  displayQuiz(quiz){
    let getQuiz = document.getElementById('get-quiz')
    let quizContainer = document.createElement('div')
    quizContainer.innerHTML = `
    <h2 id='category'>${quiz.category}</h2>
    <p>Type:${quiz.type}</p>
    <p>Difficulty:${quiz.difficulty}</p>
    <p>question:${quiz.question}</p>
    <button><p>correct_answer:${quiz.correct_answer}</p></button>
    <br>
    <button><p>incorrect_answers:${quiz.incorrect_answers}</p></button>
    `
    getQuiz.appendChild(quizContainer)
}

