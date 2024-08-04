const words = [
    "Blame", "Resemble", "Fest", "Bribe", "Colleague", "Vehicle", "Situation",
    "Urgent", "Identity", "Client", "Curious", "Unique", "Schedule", "Mitigate",
    "Failure", "Potential", "Available", "Injured", "Parcel", "Persuade", 
    "Authority", "Irrelevant", "Exaggerate", "Pamphlet", "Obedient", "Trespassing", 
    "Subsequent", "Diabetes", "Appreciate", "Punctual", "Doubt", "Caution", 
    "Service", "Caviar", "Purchase", "Conscious", "Excellent", "Equipment", 
    "Language", "Refund", "Release", "Refuse", "Prioritize", "Negotiate", 
    "Recruit", "Profitability", "Authorize", "Entrepreneur", "Quantitative", 
    "Qualitative", "Ethics", "Equity", "Franchise", "Liability", "Strategy", 
    "Patent", "Revenue", "Tariff", "Viability", "Niche", "Stakeholder", 
    "Outsourcing", "Depreciation", "Benchmark", "Compliance"
];

const translations = {
    // Add translations here if needed
};

const definitions = {
    // Add definitions here if needed
};

let currentWordIndex = -1;
let score = 0;
let hearts = 3; // Default number of hearts

function startGame() {
    // Ask user for number of hearts
    const userHearts = parseInt(prompt('How many hearts do you want to start with?', '3'), 10);

    // Validate user input
    if (isNaN(userHearts) || userHearts < 1 || userHearts > 9999999999999999999999999999999999999999999999999999999999999) {
        alert('Invalid number of hearts. Setting to default (3).');
        hearts = 3;
    } else {
        hearts = userHearts;
    }

    // Initialize game
    document.getElementById('hiddenText').style.display = 'block';
    document.getElementById('hearWordButton').style.display = 'block';
    document.getElementById('wordInput').style.display = 'block';
    document.getElementById('result').textContent = '';
    document.getElementById('translation').style.display = 'none';
    document.getElementById('definition').style.display = 'none';
    document.getElementById('nextWordButton').style.display = 'none';
    document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
    nextWord();
}

function speakWord() {
    if (currentWordIndex >= 0) {
        let word = words[currentWordIndex];
        let utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

function checkWord() {
    const userWord = document.getElementById('wordInput').value.trim();
    const correctWord = words[currentWordIndex];
    if (userWord.toLowerCase() === correctWord.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;
        document.getElementById('nextWordButton').style.display = 'block';
    } else {
        document.getElementById('result').textContent = 'Incorrect! The correct word is ' + correctWord;
        document.getElementById('result').style.color = 'red';
        hearts--;
        if (hearts <= 0) {
            alert('Game Over! You have no hearts left.');
            hearts = 3; // Reset hearts
            score = 0; // Reset score
            document.getElementById('score').textContent = 'Score: ' + score;
            document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
            document.getElementById('hiddenText').style.display = 'none';
            document.getElementById('hearWordButton').style.display = 'none';
            document.getElementById('wordInput').style.display = 'none';
        } else {
            document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
        }
    }
    document.getElementById('nextWordButton').style.display = 'block';
}

function giveUp() {
    hearts--;
    if (hearts <= 0) {
        alert('Game Over! You have no hearts left.');
        hearts = 3; // Reset hearts
        score = 0; // Reset score
        document.getElementById('score').textContent = 'Score: ' + score;
        document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
        document.getElementById('hiddenText').style.display = 'none';
        document.getElementById('hearWordButton').style.display = 'none';
        document.getElementById('wordInput').style.display = 'none';
    } else {
        document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
        document.getElementById('result').textContent = 'You gave up. The correct word was ' + words[currentWordIndex];
        document.getElementById('result').style.color = 'orange';
        document.getElementById('nextWordButton').style.display = 'block';
    }
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('hiddenText').textContent = 'Hidden'; // Hide word initially
    document.getElementById('wordInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('translation').style.display = 'none';
    document.getElementById('definition').style.display = 'none';
    document.getElementById('nextWordButton').style.display = 'none';
    document.getElementById('wordInput').style.display = 'block';
}

function showTranslation() {
    const translationElement = document.getElementById('translation');
    const currentWord = words[currentWordIndex];
    translationElement.textContent = translations[currentWord] || 'No translation available';
    translationElement.style.display = 'block';
}

function showDefinition() {
    const definitionElement = document.getElementById('definition');
    const currentWord = words[currentWordIndex];
    definitionElement.textContent = definitions[currentWord] || 'No definition available';
    definitionElement.style.display = 'block';
}
