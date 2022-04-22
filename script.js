const quizDB = [
    {
        question: "Q1: Blockchain Smart Contracts Language?",
        a: "JavaScript",
        b: "Java",
        c: "C##",
        d: "Solidity",
        ans: "ans4"
    },
    {
        question: "Q2: JavaScript Learning Timing?",
        a: "1 week",
        b: "2 week",
        c: "3 months",
        d: "2 months",
        ans: "ans3"
    },
    {
        question: "Q3: JavaScript Basics Languages?",
        a: "JavaScript",
        b: "HTML CSS",
        c: "C##",
        d: "Python",
        ans: "ans2"
    },
    {
        question: "Q4: Can We Create NFT throw Smart Contracts?",
        a: "No",
        b: "Never",
        c: "yes",
        d: "Littel",
        ans: "ans3"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelectorAll('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d; 
}

loadQuestion();

const getCkeckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        } 
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCkeckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }

    else{
        showScore.innerHTML = `
        <h3> You score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});