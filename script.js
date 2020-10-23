const quizData = [
    {
        question: "Python was introduced first in?",
        a: "1977",
        b: "1991",
        c: "1982",
        d: "none of the above",
        correct: "b",
    }, {
        question: "Enlist some common tests that are performed on APIs?",
        a: "API is considered as the essential connecting part of this digital world. ",
        b: "Challenges are the part of every form of testing and the same goes with API testing too.",
        c: " Performing tests repeatedly define some best practices for making testing successful.",
        d: "There can be multiple reasons for performing API testing.",
        correct: "d",
    },
    {
        question: " How to search a missing number in an array that contains integers from 1 to 100?",
        a: "Initialize the two strings in two variables.",
        b: "To compute the first character of a string which is not repeated",
        c: " To search a missing number in an array which contains integers from 1 to 100, the below steps are followed",
        d: "Use the replaceAll function, which replaces all the numerical digits with “”.",
        correct: "c",
    },
    {
        question: "How can you reverse a string??",
        a: "The string which is to be reversed is declared.",
        b: "Start a loop and then swap the position of the array elements.",
        c: "Print the reversed string.",
        d: "Keep the exchanged positions.",
        correct: "a",
    },
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    //click to see the result
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
