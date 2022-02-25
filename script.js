const quizData = [
  {
    question:'Which language runs in a web browser?',
    a: 'C',
    b: 'C++',
    c: 'python',
    d: 'Javascript',
    correct: 'd',
  },

  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUV Sailboat',
    correct: 'b',
  },

  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markdown Language',
    b: 'Hypertext Markup Language',
    c: 'Hypertext Machine Language',
    d: 'Hypertext Macho Language',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  let currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEl.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEl.forEach(answerEl=>{
        if(answerEl.checked)
        answer = answerEl.id;
    })

    return answer
}

submitBtn.addEventListener('click', ()=>{
    let answer = getSelected()
    if(answer === quizData[currentQuiz].correct){
        score++
    }

    currentQuiz++

   if(currentQuiz< quizData.length){
     loadQuiz()
   }else
   {
       quiz.innerHTML = `
       <h2>You answered ${score} 
       /${quizData.length} questions </h2>
       <button onlclick="location.reload()">Reload</button>
       `
   }
})