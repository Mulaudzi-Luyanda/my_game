function playGame(userChoice) {
    
    document.getElementById("userChoice").textContent = "You chose: " + capitalize(userChoice);

    
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computerChoice").textContent = "Computer chose: " + capitalize(computerChoice);

    
    let result = getWinner(userChoice, computerChoice);
    document.getElementById("gameResult").textContent = "Result: " + result;
}


function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}