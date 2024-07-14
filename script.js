
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    let userInput = document.getElementById('userInput').value;
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');
    
    if (userInput) {
        attempts++;
        userInput = Number(userInput);

        if (userInput < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
        } else if (userInput > randomNumber) {
            feedback.textContent = 'Too high! Try again.';
        } else {
            feedback.textContent = 'Congratulations! You guessed it right!';
            attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
            return;
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    } else {
        feedback.textContent = 'Please enter a valid number.';
    }
}
