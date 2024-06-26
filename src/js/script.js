let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat die Relativitätstheorie formuliert?",
        "answer_1": "Isaac Newton",
        "answer_2": "Nikola Tesla",
        "answer_3": "Albert Einstein",
        "answer_4": "Galileo Galilei",
        "right_answer": 3
    },
    {
        "question": "Welches Element hat das chemische Symbol O?",
        "answer_1": "Gold",
        "answer_2": "Sauerstoff",
        "answer_3": "Silber",
        "answer_4": "Osmium",
        "right_answer": 2
    },
    {
        "question": "In welchem Jahr begann der Zweite Weltkrieg?",
        "answer_1": "1939",
        "answer_2": "1941",
        "answer_3": "1935",
        "answer_4": "1945",
        "right_answer": 1
    },
    {
        "question": "Welcher Planet ist der Sonne am nächsten?",
        "answer_1": "Erde",
        "answer_2": "Mars",
        "answer_3": "Venus",
        "answer_4": "Merkur",
        "right_answer": 4
    },
    {
        "question": "Wie viele Planeten hat unser Sonnensystem?",
        "answer_1": "7",
        "answer_2": "8",
        "answer_3": "9",
        "answer_4": "10",
        "right_answer": 2
    },
    {
        "question": "Wer malte die Mona Lisa?",
        "answer_1": "Vincent van Gogh",
        "answer_2": "Pablo Picasso",
        "answer_3": "Leonardo da Vinci",
        "answer_4": "Claude Monet",
        "right_answer": 3
    },
    {
        "question": "Welcher Kontinent ist der größte?",
        "answer_1": "Afrika",
        "answer_2": "Europa",
        "answer_3": "Asien",
        "answer_4": "Südamerika",
        "right_answer": 3
    },
    {
        "question": "Wie viele Ozeane gibt es auf der Erde?",
        "answer_1": "3",
        "answer_2": "5",
        "answer_3": "7",
        "answer_4": "4",
        "right_answer": 2
    },
    {
        "question": "Wer schrieb 'Der Herr der Ringe'?",
        "answer_1": "George R.R. Martin",
        "answer_2": "J.K. Rowling",
        "answer_3": "J.R.R. Tolkien",
        "answer_4": "C.S. Lewis",
        "right_answer": 3
    }
];

let currentQuestion = 0;
let countCorrectAnswers = 0;

function init() {
    document.getElementById('total_questions').innerText = questions.length;
    showQuestion();
}

function showQuestion() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-bar').innerText = `${percent.toFixed(0)} %`;

    let question = questions[currentQuestion];
    document.getElementById('current_question').innerText = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = parseInt(selection.slice(-1));
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber === question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        countCorrectAnswers++;
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        resetBackgrounds();
        showQuestion();
    } else {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('countCorrectAnswers').innerText = countCorrectAnswers;        
        document.getElementById('total').innerText = questions.length;
        document.getElementById('header-img').src = '/public/img/brain_result.png';
    }
    
    document.getElementById('next-button').disabled = true;
}

function resetBackgrounds() {
    document.getElementById('answer_1').classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success', 'bg-danger');
}

function restartGame() {
    document.getElementById('header-img').src = '/public/img/question.jpg';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';

    currentQuestion = 0;
    countCorrectAnswers = 0;

    init();    
}