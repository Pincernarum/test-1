const questions = [
    {
        question:"The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
        answers: [
            {text: "August 21", correct: true},
            {text: "August 23", correct: false},
            {text: "August 19", correct: false},
            {text: "August 17", correct: false},
        ]
    },
    {
        question:"What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
        answers: [
            {text: "0 - 1", correct: false},
            {text: "3 - 4", correct: false},
            {text: "7 - 1", correct: true},
            {text: "16 - 0", correct: false},
        ]
    },
    {
        question:"Who won the 2016 Formula 1 World Driver&#039;s Championship?",
        answers: [
            {text: "Kimi Raikkonen", correct: false},
            {text: "Max Verstappen", correct: false},
            {text: "Lewis Hamilton", correct: false},
            {text: "Nico Rosberg", correct: true},
        ]
    },
    {
        question:"In bowling, what is the term used for getting three consecutive strikes?",
        answers: [
            {text: "Turkey", correct: true},
            {text: "Flamingo", correct: false},
            {text: "Birdie", correct: false},
            {text: "Eagle", correct: false},
        ]
    },
    {
        question:"The Los Angeles Dodgers were originally from what U.S. city",
        answers: [
            {text: "Las Vegas", correct: false},
            {text: "Brooklyn", correct: true},
            {text: "Boston", correct: false},
            {text: "Seattle", correct: false}
        ]
    }
]

    let answersContainer = document.getElementById("answers-container")
    let questionIndex = 0
    let currentQuestion = document.getElementById("question")
    let score = document.getElementById("score")

const game = () => {
    currentQuestion.innerText = questions[questionIndex].question
    answersContainer.innerHTML = ""
    questions[questionIndex].answers.forEach(answer => {
        let btn = document.createElement("button")
        btn.classList.add("btn")
        btn.textContent = answer.text
        answersContainer.appendChild(btn)
        btn.addEventListener("click", () => {
            if(answer.correct) {
                score.textContent = `SCORE: ${questionIndex+1}`
                questionIndex++
                if(questionIndex < questions.length) {
                    game()
                } else {
                    alert("You won")
                }
            } else {
                alert("False")
            }
        })
    })
}
game()