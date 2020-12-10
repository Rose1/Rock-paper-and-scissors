// DOM
const message_punctuation0 = document.getElementById('message0');
const message_punctuation = document.getElementById('message1');
const message_punctuation2 = document.getElementById('message2');
const img_computer = document.getElementById('img');
const winner = document.getElementById('winner');
const attempts = document.getElementById('attempts');

// variables
let human = "";
let computer = "";
let i = 5;

let message = "";
let message2 = "";
let humanScore = 0;
let computerScore = 0;

function startGame() {
    human = "";
    computer = "";
    humanScore = 0;
    computerScore = 0;
    i = 5;
}

function game(hOption) {
    console.log(i);
    if (i == 1) {
        /* desde aqui */
        humanOption(hOption);
        computerOption();
        compareOptions();
        /* hasta aquui*/
        if (humanScore > computerScore) {
            message2 = "Congratulations, you win!";
        } else if (humanScore < computerScore) {
            message2 = "Oops, computer beats you";
        } else {
            message2 = "A tie";
        }
        winner.innerHTML = `${message2}`;
        console.log(human + " - "+ computer);
        startGame();
        attempts.innerHTML = `You have ${i} attempts`;
    } else {
        i--;
        attempts.innerHTML = `You have ${i} attempts`;
        humanOption(hOption);
        computerOption();
        compareOptions();
        winner.innerHTML = "Playing..."
        console.log(human + " - "+ computer);
    }
}

function humanOption(pOption) {
    human = pOption;
    // console.log(pOption);

}

function computerOption() {
    let max = 3;
    let min = 0;
    let random = Math.floor(Math.random() * (max - min)) + min;
    // console.log(random);
    if (random < 1) {
        computer = "Rock";
        img_computer.src = "img/rock.png";
    } else {
        if (random < 2) {
            computer = "Paper";
            img_computer.src = "img/paper.png";
        } else {
            computer = "Scissors";
            img_computer.src = "img/scissors.png";
        }
    }
}

function compareOptions() {
    if (computer == human) {
        message = "It's a tie";
    } else {
        if (human == "Rock") {
            if (computer == "Paper") {
                message = "Bad! Paper beats rock";
                computerScore++;
            } else if (computer == "Scissors") {
                message = "Great! Rock beats scissors";
                humanScore++;
            }

        } else if (human == "Paper") {
            if (computer == "Rock") {
                message = "Great! Paper beats rock";
                humanScore++;
            } else if (computer == "Scissors") {
                message = "Bad! Scissors beats paper";
                computerScore++;
            }
        } else {
            // human == "Scissors" 
            if (computer == "Rock") {
                message = "Bad! Rock beats scissors";
                computerScore++;
            } else if (computer == "Paper") {
                message = "Great! Scissors beats paper";
                humanScore++;
            }
        }
    }
    message_punctuation0.innerHTML = `${message}`;
    message_punctuation2.innerHTML = `${human} - ${computer}`;
    message_punctuation.innerHTML = `${humanScore} - ${computerScore}`;

}