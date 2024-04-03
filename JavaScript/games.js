let startGameSound = new Audio('audio/startQuiz.mp3')
startGameSound.play();
startGameSound.loop = true;


// getting the dom element in the game feature div.
const gameGuideElement = document.querySelector('.js-game-guide');
const clickButtonElement = document.querySelector('.js-click-button')  
document.querySelector('.amount');
document.querySelector('.rate-number');
document.querySelector('.five')
document.querySelector('.four')
document.querySelector('.three')
document.querySelector('.two')
document.querySelector('.one')
let yesBtn = document.querySelector('.yes-btn');
let autoPlayBtn = document.querySelector('.auto-play-button');

let userNickNamesAndComments = JSON.parse(localStorage.getItem
  ('userNickNamesAndComments')) || [];

let commentHTML = '';
if(userNickNamesAndComments) {
  userNickNamesAndComments.forEach((item) => {
    commentHTML += `
    <div class="commentsdiv">${item.nickname}: ${item.userComments}</div>
    `
  })
  document.querySelector('.comment-view')
  .innerHTML = commentHTML
}

// getting the number of stars from the local storage;
let NumOfStars = JSON.parse(localStorage.getItem
  ('NumberofStars')) || 5;

// updating the stars value once we get it from local storage
updateStarNumber();

// getting the coin value from the local storage
let ownedCoins = JSON.parse(localStorage.getItem
  ('ownedCoins')) || 0;

// updating the coin once we get it from the local storage
updateCoinElement()

// getting the score values from the local storage
let score = JSON.parse(localStorage.getItem
  ('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
  }

  //updating the score once we gotten from local storage
  updateScoreElement();
  
//activating the autoplay function with a button click;
document.querySelector('.js-autoPlay-button').
addEventListener('click', () => {
autoPlay();
});

//declaring the autoPlay variables
let isAutoPlaying = false;
let intervalId;

//defining the autoPlay function
function autoPlay() {
  if(!isAutoPlaying) {
   intervalId =  setInterval(() => {
      const playerMove = pickcomputerMove();
     playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;
    document.querySelector('.js-autoPlay-button')
    .innerText = 'Stop Playing'
  } else {
clearInterval(intervalId);
isAutoPlaying = false;
document.querySelector('.js-autoPlay-button')
.innerText = 'Auto Play'
  }}

  if(ownedCoins >= 50) {
    document.querySelector('.use-coins').innerHTML = `
    AutoPlay mode is not active, use $50.00 to activate the autoPlay mode?
    <button class="yes-btn sound-active">Yes</button> <button class="no-btn sound-active">No</button>
    `
    yesBtn.addEventListener('click', () =>  {
      if(ownedCoins >= 50 && autoPlayBtn.disabled === true) {
        ownedCoins = ownedCoins - 50;
        autoPlayBtn.disabled = false;
        updateCoinElement();
        localStorage.setItem('ownedCoins', JSON.stringify(ownedCoins));
        document.querySelector('.use-coins').innerHTML = '';
      }
      else if(ownedCoins <= 50) {
        document.querySelector('.insufficient').innerHTML = 'insufficient Coins please Try again later';
        setTimeout(() => {
          document.querySelector('.insufficient').innerHTML = '';
        }, 2000);
      }
  })

  } else {
    document.querySelector('.use-coins').innerHTML = '';
  }

  
//defining an option for autoplay key shortcut
document.body.addEventListener('keydown', (event) => {
if(event.key === 'a') {
    autoPlay();
}
 else if (event.key === 'Backspace') {
    let paraElement = document.querySelector('.js-comfirmation-message')
    paraElement.innerHTML = `are you sure you want to Reset the score?
    <button class='js-yes-button'>Yes</button> <button class=js-no-button>No</button>`
    document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
        score.wins = 0,
      score.loses = 0,
      score.ties = 0;
      localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
    })
    document.querySelector('.js-no-button')
    .addEventListener('click', () =>  {
    paraElement.innerHTML = '';
    })};
});

//calling the play game function when the player move is rock
document.querySelector('.js-rock-button')
.addEventListener('click', () => {
   if(score.wins === 25) {
    ownedCoins += 5;
    document.querySelector('.amount')
    .innerHTML = `$${ownedCoins}.00`
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
     playGame('rock');
  } 
  else {
    playGame('rock')
  }
  // saving the coin value in the local storage
  localStorage.setItem('ownedCoins', JSON.stringify(ownedCoins));
});

//calling the playGame function when the player move is paper 
document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  if(score.wins === 25) {
    ownedCoins += 5;
    document.querySelector('.amount')
    .innerHTML = `$${ownedCoins}.00`
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
     playGame('paper');
  }
  else {
    playGame('paper');
  }
  // saving the coin value in the local storage
  localStorage.setItem('ownedCoins', JSON.stringify(ownedCoins));
});

//calling the playGame function when the player move is scissors
document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  if(score.wins === 25) {
    ownedCoins += 5;
    document.querySelector('.amount')
    .innerHTML = `$${ownedCoins}.00`
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
     playGame('scissors');
  }
  else {
    playGame('scissors')
  }
  // saving the coin value in the local storage
  localStorage.setItem('ownedCoins', JSON.stringify(ownedCoins));
});


//adding an event listener to the body for shortcut keys to play game
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
playGame('rock');
  } else if (event.key === 'p') {
playGame('paper')
  } else if(event.key === 's') {
playGame('scissors')
  }
})


// defining a function for playeGame
function playGame(playerMove){
//computer plays first
const computerMove = pickcomputerMove(); 
// the result variable
let result = '';
// defining the result for the playermove = scissors
if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You Loose.';
} else if (computerMove === 'paper') {
result = 'You Win.';
}else if (computerMove === 'scissors') {
result = 'Tie.';
}
}
// defining the result for the playermove = paper
else if (playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You Win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You Loose.';
}
}
// defining the results for th playermove = rock
else if (playerMove === 'rock') {
if ( computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper') {
result = 'You Loose.';
}else if (computerMove === 'scissors') {
result = 'You Win.';
}
}
//updating the score as regards result variables
if (result === 'You Win.') {
score.wins +=1;
}
else if (result === 'You Loose.') {
score.loses +=1;
}
else if (result === 'Tie.') {
score.ties +=1;
} 
// setting the score to local storage
localStorage.setItem('score', JSON.stringify(score));
// displaying the user and computer moves
document.querySelector('.js-move')
.innerHTML = `  User
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img  class="move-icon" src="images/${computerMove}-emoji.png">
Computer`
document.querySelector('.js-result')
.innerHTML = `${result}`
updateScoreElement();
}

//activating the button learn game button
document.querySelector('.js-game-rules').
addEventListener('click', () => {
showAndClearGameGuide();
});

//activating the reset score button 
document.querySelector('.js-reset-score-button').
addEventListener('click', () => {
     let paraElement = document.querySelector('.js-comfirmation-message')
    paraElement.innerHTML = `are you sure you want to Reset the score?
    <button class='js-yes-button sound-active'>Yes</button> <button class='js-no-button sound-active'>No</button>`
    document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
        score.wins = 0,
      score.loses = 0,
      score.ties = 0;
      localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
    })
    document.querySelector('.js-no-button')
    .addEventListener('click', () =>  {
    paraElement.innerHTML = '';
    });
});

//activating the click function of the rating btns 
//by calling the rateWeb function for the five star btn
document.querySelector('.five')
.addEventListener('click', () => {
  rateWeb('five')
});

//activating the click function of the rating btns 
//by calling the rateWeb function for the four star btn
document.querySelector('.four')
.addEventListener('click', () => {
  rateWeb('four')
});

//activating the click function of the rating btns 
//by calling the rateWeb function for the three star btn
document.querySelector('.three')
.addEventListener('click', () => {
  rateWeb('three')
});

//activating the click function of the rating btns 
//by calling the rateWeb function for the two star btn
document.querySelector('.two')
.addEventListener('click', () => {
  rateWeb('two')
});

//activating the click function of the rating btns 
//by calling the rateWeb function for the one star btn
document.querySelector('.one')
.addEventListener('click', () => {
  rateWeb('one')
});

//adding a sound effect to all the clickable buttons in the page
document.querySelectorAll('.sound-active')
.forEach((item) => {
  item.addEventListener('click', () => {
    audioPlayer();
  })
})

// definind a function for updatng the score value
function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, losses: ${score.loses}, ties: ${score.ties}.`
}

// defining a function for picking computer move 
function pickcomputerMove() {
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';
}
else if (randomNumber >= 2/3 && randomNumber < 1) {
computerMove = 'scissors';
}
return computerMove;
};

//defining a function 'showandcleargameguide' for the learn game button
function showAndClearGameGuide() {
  if(clickButtonElement.innerText === 'Learn Game') {
  clickButtonElement.innerHTML = 'Close';
  gameGuideElement.innerText = `
    This is a simple game powered by EinsteinEngine EE;
    The game provides our users the ultimate user experience 
    during the exploration of this site. 
    However, the rules of the games is quite simple, 
    Your moves either 'PAPER' or 'ROCK' or 'SCISSORS' are
    compared with that of computer and the moves are 
    compared to give out the result.
    if the user guessed the computer move correctly.
  
    Every 25 wins,  a total of $5 is added to your coin value
    to be used later whilst the score resets automatically.
  
    The 'AUTO PLAY' mode  makes the computer to play 
    against itself and automatically add the score to you.
    You can play this at your lesiure while you must 
    have activated the 'AUTO PLAY' mode with 200 coins.
  
    Press 'r', 'p', 's' to make a 'Rock', 'Paper', 'Scissors' move
    respectively.
  
    Please do leave at least 1 star after you finished
    our site.
   ` 
  } else if(clickButtonElement.innerText === 'Close') {
  clickButtonElement.innerHTML = 'Learn Game';
  gameGuideElement.innerHTML = '';
  }}; 
  
  //defining a function for updating the coin value;
  function updateCoinElement() {
    document.querySelector('.amount')
    .innerHTML = `$${ownedCoins}.00`;
  }

  //defining a function to update the rate buttons
  function rateWeb(starNumber) {
      if(starNumber === 'five') {
        NumOfStars += 5;
      }
       else if(starNumber === 'four') {
        NumOfStars += 4;
       }
       else if(starNumber === 'three') {
        NumOfStars += 3;
       }
       else if(starNumber === 'two') {
        NumOfStars += 2;
       }
       else if(starNumber === 'one') {
        NumOfStars += 1;
       }
       document.querySelector('.rate-number')
       .innerHTML = NumOfStars;
       // setting the number of stars to the local storage
       localStorage.setItem('NumberofStars', JSON.stringify(NumOfStars));
  }

  //updating the number of stars value
  function updateStarNumber() {
    document.querySelector('.rate-number')
    .innerHTML = NumOfStars;
  }

// defining a function for audio player
function audioPlayer() {
  var snd = new Audio('audio/snd1.wav');
  snd.play();
}

// handling the comment review section and saving it to local storage.
let nameInput = document.getElementById('nicknameInput')
let textInput = document.getElementById('textarea')
let sendInput = document.getElementById('send')

sendInput.addEventListener('click', () => {
  let userCommentDetails = {
    nickname: nameInput.value,
    userComments: textInput.value
  }
  userNickNamesAndComments.push(userCommentDetails)
  localStorage.setItem('userNickNamesAndComments', JSON.stringify(userNickNamesAndComments));
})

// on and off btn
let soundBtn = document.querySelector('.sound-btn')
soundBtn.addEventListener('click', () => {
  if(soundBtn.innerHTML === 'off sound') {
    startGameSound.pause();
    soundBtn.innerHTML = 'on sound';
  } 
     else if (soundBtn.innerHTML === 'on sound')
      {
        startGameSound.play();
        soundBtn.innerHTML = 'off sound';
    }  
})