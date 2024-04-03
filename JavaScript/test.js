const questions = [
    {
        question: "Which is the largest animal in the world",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Girrafe", correct: false},
        ]
    },
    {
        question: "Which among this option is a possible way to climb a five-step staircase",
        answers: [
           {text: "3, 1, 1", correct: false},
           {text: "2, 3", correct: false},
           {text: "2, 2, 3", correct: false},
           {text: "2, 2, 1", correct: true},     
        ]
    },
    {
        question: "Some months have 30 days. others have 31 days how many has 28 days",
        answers: [
           {text: "Only 1", correct: false},
           {text: "just full moon", correct: false},
           {text: "all of them", correct: true},
           {text: "some months", correct: false},  
        ]
    },
    {
        question: "You are running in race and you overtake the person taking second, what position will you be ranking now ",
        answers: [
           {text: "third", correct: false},
           {text: "first", correct: false},
           {text: "second", correct: true},
           {text: "after the second", correct: false}, 
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
           {text: "Vatican City", correct: true},
           {text: "Bhutan", correct: false},
           {text: "Nepal", correct: false},
           {text: "Shri Lank", correct: false},
        ]
    },
    {
        question: "If Theresa's mother is my daughter, who am i to Theresa",
        answers: [
           {text: "Theresa is my grand child", correct: false},
           {text: "Theresa's Grand mother", correct: true},
           {text: "A friend to Theresa's Mother", correct: false},
           {text: "Theresa's grand mother to her daughter", correct: false},
        ]
    },
    {
        question: "Penny has five children: JANUARY, FEBUARY, MARCH APRIL, What is the name of Penny's fifth child ",
        answers: [
           {text: "May", correct: false},
           {text: "Likely the name of other months of the year", correct: false},
           {text: "What", correct: true},
           {text: "Impossible", correct: false},
        ]
    },
    {
        question: "Which is the  smallest continent in the world?",
        answers: [
           {text: "Asia", correct: false},
           {text: "Australia", correct: true},
           {text: "Artic", correct: false},
           {text: "Africa", correct: false},
        ]
    },
    {
        question: "Which number helps you get the next number 72 82 72 82 92 82 72 82 92",
        answers: [
           {text: "8", correct: false},
           {text: "10", correct: true},
           {text: "11", correct: false},
           {text: "13", correct: false}
        ]
    },
    {
        question: "Mary is 16 years old, She is 4 times older than her brother; How old will Mary be when shes is twice her age?",
        answers: [
           {text: "24", correct: true},
           {text: "that's impossible", correct: false},
           {text: "28", correct: false},
           {text: "20", correct: false},     
        ]
    },
    {
        question: "Which number is missing in the series? : 8 10 14 18 _? 34 50 66",
        answers: [
           {text: "20", correct: false},
           {text: "26", correct: true},
           {text: "28", correct: false},
           {text: "30", correct: false},   
        ]
    },
    {
        question: "Music: Compose, Device: ?",
        answers: [
           {text: "Use", correct: false},
           {text: "Create", correct: false},
           {text: "Construct", correct: false},
           {text: "Invent", correct: true},  
        ]
    },
    {
        question: "A doctor and a bus driver are both in love with a beautiful girl named Sarah, the  bus driver had to go for a long trip that would take him a week to return, before he left, he gave Sarah seven apples. Why did he do so?",
        answers: [
           {text: "He wanted to profess his love", correct: false},
           {text: "to show Sarah he is willing to spend for her", correct: false},
           {text: "Thought Sarah as a beautiful Product for Audition", correct: false},
           {text: "An apple a day keeps the doctor away", correct: true},  
        ]
    },
    {
        question: "What is wrong in eveyrthing",
        answers: [
           {text: "Eveyrthing cannot be wrong", correct: false},
           {text: "Eveyrthing is always wrong", correct: false},
           {text: "Nothing is wrong", correct: false},
           {text: "y is wrong", correct: true},
        ]
    },
    {
        question: "What is special about these words job, polish herb",
        answers: [
           {text: "Name of a person, A black substance, from trees and plants", correct: false},
           {text: "An Object, Man from Poland, used as cure ", correct: false},
           {text: "They are pronounced differently when each of their first alphabeth is capitalized", correct: true},
           {text: "Just words", correct: false}, 
        ]
    },
    {
        question: "Which English word in the option have its first two letters signify a male, the first three letters signify a female, the first four signify a great man, and the whole word signify a great woman",
        answers: [
           {text: "Handsome", correct: false},
           {text: "He ", correct: false},
           {text: "Male", correct: false},
           {text: "Heroine", correct: true},  
        ]
    },
    {
        question: "Which is harder to catch the faster you run",
        answers: [
           {text: "Ghost", correct: false},
           {text: "Shawdow", correct: true},
           {text: "Car", correct: false},
           {text: "Breath", correct: false}, 
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
           {text: "Kalahari", correct: false},
           {text: "Gobi", correct: false},
           {text: "Sahara", correct: false},
           {text: "Antarctica", correct: true}, 
        ]
    },
    {
        question: "Which fraction is bigger",
        answers: [
            {text: "3/2", correct: false},
            {text: "5/8", correct: true},
            {text: "1/2", correct: false},
            {text: "4/7", correct: false},
        ]
    },
    {
        question: "SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY - which day is three days before the day immidiately following the day two days before the day three days after the day immidiately before friday",
        answers: [
            {text: "Tuesday", correct: false},
            {text: "Wednesday", correct: true},
            {text: "Thursday", correct: false},
            {text: "Sunday", correct: false},
        ]
    },
    {
        question: "You can't see me in a day, but i appear twice a week and once in a year. What am i ?",
        answers: [
            {text: "tomorrow", correct: false},
            {text: "E", correct: true},
            {text: "Moon", correct: false},
            {text: "The Sun", correct: false},
        ]
    },
    {
        question: "What is today, but its yet to come, yet, never comes",
        answers: [
            {text: "The year", correct: false},
            {text: "Death", correct: false},
            {text: "Tomorrow", correct: true},
            {text: "Today", correct: false},
        ]
    },
    {
        question: "You see an old Man and a Seven year old kid walking on the road whilst you are driving, who should you kill first?",
        answers: [
            {text: "The Old Man because his life is almost ended", correct: false},
            {text: "The Kid because he just began his life", correct: false},
            {text: "I am not a driver", correct: false},
            {text: "The Speed and Hit the break", correct: true},
        ]
    },
    {
        question: "How do i enter a room that has no walls or window or door",
        answers: [
            {text: "it's impossible", correct: false},
            {text: "i will stop trying to enter", correct: false},
            {text: "just walk up to the room and enter", correct: true},
            {text: "there's no room without doors", correct: false},
        ]
    },
    {
        question: "Which greek letter name has its symbol used by Ohms in its Scientific laws",
        answers: [
            {text: "Beta", correct: false},
            {text: "Gamma", correct: false},
            {text: "Omega", correct: true},
            {text: "Alpha", correct: false},
        ]
    },
];


//defining a variable for the audios
var wrongSound = new Audio('audio/wrongsound.mp3')
var correctSound = new Audio('audio/correct.mp3')
var sixteenSec = new Audio('audio/16sectick.mp3')
var quizTimer = new Audio('audio/quiztimesound.mp3')
let startQuizSound = new Audio('audio/startQuiz.mp3')
startQuizSound.play();
startQuizSound.loop = true;

function correcrSoundAndWrongSoundPlayer(eventTime) {
    if(eventTime === 'correct') {
        startQuizSound.pause();
        quizTimer.pause();
        sixteenSec.pause();
        correctSound.play();
    }

    else if(eventTime === 'wrong') {
        startQuizSound.pause();
        quizTimer.pause();
        sixteenSec.pause();
        wrongSound.play();
    }
}

//defining a variable for the buttons 
const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let gottenQuestions = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)                                                    
    });
}

function resetState() {;
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function showScore() {
    resetState();
    let maximumScore = 400;
    let lastScore = score + 40;
     if(lastScore  === 400) {
        questionElement.innerHTML = `You got${gottenQuestions} correct answers out of ${questions.length}!
    Your score is very high.Use your skills to develop the universe. Your'e a genius
    your score is ${lastScore} out Maximum Score: ${maximumScore}!!!
    `
     } else if(lastScore > 350 && lastScore < 400 ) {
        questionElement.innerHTML = `You got - ${gottenQuestions} correct answers out of ${questions.length}!
    Your score is  high.Use your skills to develop the universe.
    your score is ${Math.ceil(lastScore)} out of Maximum Score: ${maximumScore}!!!
    `
     } else if(lastScore < 350 && lastScore > 200 ) {
        questionElement.innerHTML = `You got - ${gottenQuestions} correct answers out of ${questions.length}!
    Nailed it !!!.Use your skills to develop the universe.
    your score is ${Math.ceil(lastScore)} out of Maximum Score: ${maximumScore}!!!
    `
     } else if(lastScore < 200) {
        questionElement.innerHTML = `You got - ${gottenQuestions} correct answers out of ${questions.length}!
    There is room for improvement.Use your skills to develop the universe.
    your score is ${Math.ceil(lastScore)} out of Maximum Score: ${maximumScore}!!!
    `
     }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
        quizStartTimeAndStopTime();
        
    } else {
        startQuiz();
    }

    if(nextButton.innerHTML === 'Play Again') {
        handleNextButton();
        quizStartTimeAndStopTime()
        quizTimer.play()
    }
})

startQuiz();

  // defining a function quizStartTimeAndStopTime for the quiz time
  let miliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hour = 0;
  let formattedms = miliseconds.toString().padEnd(2, '0');
  let formattedss = seconds.toString().padEnd(2, '0');
  let formattedmm = minutes.toString().padEnd(2, '0');
  let formattedhh = hour.toString().padEnd(2, '0');
  let quizTime = document.querySelector('.time');

  // activating sound for the start quiz button
  let startBtn = document.querySelector('.start-quiz-btn');
  startBtn.addEventListener('click', () => {
    quizStartTimeAndStopTime();
    startQuizSound.pause();
    quizTimer.play();
    let app = document.querySelector('.app')
    app.style.display = 'block';
    startBtn.disabled = true;
  });

 //function toReadQuizTime
  function quizStartTimeAndStopTime() {
        timeInterval = setInterval(() => {
            if(formattedms < 60) {
            formattedms++;
            document.querySelector('.time').innerHTML = 
            `${formattedss}: ${formattedms}`;  
            }
           else if (formattedms === 60) {
            formattedms = 0;
            formattedss++;
           }
    
           if(formattedss >= 45 ) {
            formattedss = 0;
            clearInterval(timeInterval);
            formattedms = miliseconds.toString().padEnd(2, '0');
            formattedss = seconds.toString().padEnd(2, '0');
            document.querySelector('.time').innerHTML = 
            '00:00';
            correcrSoundAndWrongSoundPlayer('wrong');
            handleNextButton();
            quizTimer.play();
            quizStartTimeAndStopTime();
           }

           if(formattedss === 31) {
            quizTimer.pause();
            sixteenSec.play();
           }

           if(nextButton.innerHTML === 'Play Again') {
    clearInterval(timeInterval);
    formattedms = miliseconds.toString().padEnd(2, '0');
    formattedss = seconds.toString().padEnd(2, '0');
    document.querySelector('.time').innerHTML = 
    '00:00';
    quizTimer.pause();
           }
        
        }, 20)
        quizTimer.play();
  };


let timeInterval; 
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        gottenQuestions ++;
        score += 14.4;
        selectedBtn.addEventListener('click', correcrSoundAndWrongSoundPlayer('correct'))
    } else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.addEventListener('click', correcrSoundAndWrongSoundPlayer('wrong'))
    }
    clearInterval(timeInterval);
    formattedms = miliseconds.toString().padEnd(2, '0');
            formattedss = seconds.toString().padEnd(2, '0');
            document.querySelector('.time').innerHTML = 
            '00:00';
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

  
