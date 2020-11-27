const view= {}
const questions = [
    {
        question: 'Điền từ còn thiếu: "Đục nước béo..."?',
        answers: [
            {text : "Vạc", correct: false},
            {text: "Cò", correct: true},
            {text : "Cá", correct: false},
            {text : "Mèo", correct: false},
        ]
    },
    {
        question: 'Việt Nam có chung biên giới với quốc gia nào dưới đây?',
        answers: [
            {text : "Thái Lan", correct: false},
            {text: "Myanmar", correct: false},
            {text : "Trung Quốc",correct: true},
            {text : "Bruney", correct: false},
        ]
    },
    {
        question: 'Đâu là tên một ngôi chùa nổi tiếng ở Hà Nam?',
        answers: [
            {text : "Bái Đính", correct: false},
            {text: "Trấn Quốc", correct: false},
            {text : "Bổ Đà",correct: false},
            {text : "Tam Chúc", correct: true},
        ]
    },
    {
        question: 'Sóng biển thường được tạo ra do cái gì?',
        answers: [
            {text : "Nắng", correct: false},
            {text: "Gió", correct: true},
            {text : "Mưa",correct: false},
            {text : "Sương Mù", correct: false},
        ]
    },
    {
        question: 'Âm thanh có tần số lớn hơn 20KHz gọi là gì?',
        answers: [
            {text : "Siêu âm", correct: true},
            {text: "Hạ âm", correct: false},
            {text : "Cận âm",correct: false},
            {text : "Quá Âm", correct: false},
        ]
    },
]
view.setActiveScreen = (screenName) => {
    switch(screenName) {
        case 'welcomePage' : 
        document.getElementById('app').innerHTML =components.welcomPage
        document.getElementById('start-btn').addEventListener('click',() =>{
            view.setActiveScreen('startPage');
        })
        let theme = document.getElementById("main-theme")
        var audio = false
        document.getElementById("sound-btn").addEventListener("click", ()=>{
            if(audio) {
                theme.pause()
                audio = false
                document.getElementById("sound-btn").style = "background-image: url(ảnh/soundOff.png); background-size: contain; background-repeat: no-repeat;"
            } else {
                theme.play()
                audio = true
                document.getElementById("sound-btn").style = "background-image: url(ảnh/soundOn.png); background-size: contain; background-repeat: no-repeat;"
            }
        })
        break
        case 'startPage' : 
        document.getElementById('app').innerHTML=components.startPage
        const questionsList = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")
let currentQuestion = document.getElementById("question")
let questionIndex = 0

nextBtn.addEventListener("click", () => {
    questionIndex++
    showQuestion()
    nextBtn.classList.add("hide")
    document.getElementById("under").classList.remove("hide")
})

let showQuestion = () => {
    showPrize()
    if(questionIndex < questions.length) {
        questionsList.innerHTML = ""
        currentQuestion.innerText = questions[questionIndex].question
        questions[questionIndex].answers.forEach(answer => {
            let button = document.createElement("button")
            button.innerText = answer.text
            button.classList.add("btn")
            button.classList.add("hover")
            questionsList.appendChild(button)
            button.addEventListener("click", () => {
                document.getElementById("under").classList.add("hide")
                removeHover()
                if(answer.correct) {
                    button.classList.add("correct")
                    nextBtn.classList.remove("hide")
                } else {
                    document.getElementById("question-container").classList.add("hide")
                    let prizes = document.getElementsByClassName("prize")
                    for (let prize of prizes) {
                        prize.style = "display: none"
                    }
                    let announcement = document.createElement("div")
                    let backBtn = document.createElement("button")
                    backBtn.innerText = "Go back"
                    backBtn.addEventListener("click", () => {
                        view.setActiveScreen("welcomeScreen")
                    })
                    announcement.innerText = "You lost"
                    document.getElementById("container").appendChild(announcement)
                    document.getElementById("container").appendChild(backBtn)
                }
            })
        })
    }
}

let removeHover = () => {
    let btns = questionsList.children
    for (let btn of btns) {
        btn.classList.remove("hover")
    }
}

let showPrize = () => {
    if(questionIndex > 0) {
        let currentPrize = document.getElementById(questionIndex - 1)
        currentPrize.classList.add("current")
    }
}

showQuestion()
        let sound=document.getElementById("main-theme")
        var audio = false
        document.getElementById("sound-btn").addEventListener("click", ()=>{
            if(audio) {
                sound.pause()
                audio = false
                document.getElementById("sound-btn").style = "background-image: url(ảnh/soundOff.png); background-size: contain; background-repeat: no-repeat;"
            } else {
                sound.play()
                audio = true
                document.getElementById("sound-btn").style = "background-image: url(ảnh/soundOn.png); background-size: contain; background-repeat: no-repeat;"
            }
        })

        break
    }


}

