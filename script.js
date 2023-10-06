const questions = [
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Terra", "Marte", "Vênus", "Júpiter"],
        answer: "Vênus"
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Marte", "Júpiter", "Vênus"],
        answer: "Júpiter"
    },
    {
        question: "Qual é a estrela no centro do Sistema Solar?",
        options: ["Vênus", "Lua", "Júpiter", "Sol"],
        answer: "Sol"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (const option of currentQuestion.options) {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", checkAnswer);
        optionsElement.appendChild(li);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";

    resultElement.textContent = `Você acertou ${score} de ${questions.length} questões!`;
}

loadQuestion();
nextButton.addEventListener("click", loadQuestion);
