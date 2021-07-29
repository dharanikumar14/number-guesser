let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (source, destination) => {
    return Math.abs(source - destination);
}

function compareGuesses(user, computer, target) {

    if (user < 0 || user > 9 ) {
        alert('Guess is out of range. Please select a number between 0 and 9');
    }

    const computerDistance = getAbsoluteDistance(computer, target);
    const userDistance = getAbsoluteDistance(user, target);
    const minDistance = Math.min(userDistance, computerDistance);

    if (userDistance == computerDistance) {
        return true;

    } else if (minDistance == userDistance) {
        return true;
    } else {
        return false;
    }
}

function updateScore(updateScore) {


    if (updateScore == 'computer') {
        computerScore = computerScore + 1;
    } else if (updateScore == 'human') {
        humanScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}