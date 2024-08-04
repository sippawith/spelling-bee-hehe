<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spelling Bee hehehe</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Outfit', sans-serif;
            background-image: url('background.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            text-align: center;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
            max-width: 800px;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .stickman {
            font-size: 3.5em;
            margin-bottom: 20px;
            animation: jump 0.5s ease-in-out infinite;
        }
        @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .hidden-text {
            color: #ff4757;
            font-size: 2.5em;
            margin: 20px 0;
            font-weight: bold;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        button {
            padding: 12px 24px;
            font-size: 1.1em;
            border: none;
            border-radius: 10px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            min-width: 150px;
        }
        button:hover {
            background-color: #45a049;
            transform: scale(1.05);
        }
        button:active {
            transform: scale(0.95);
        }
        input[type="text"] {
            padding: 12px;
            font-size: 1.1em;
            margin: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 100%;
        }
        .result {
            font-size: 1.5em;
            margin: 20px 0;
            font-weight: bold;
        }
        .translation, .definition {
            font-size: 1.1em;
            margin: 10px 0;
            color: #ffdd57;
            font-family: 'Noto Sans Thai Looped', sans-serif;
        }
        .progress, .score, .hearts {
            font-size: 1.5em;
            margin: 20px 0;
        }
        .info-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        }
        .animation-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .heart {
            font-size: 1.5em;
            color: #ff4757;
            margin: 0 5px;
        }
        .made-by {
            margin-top: 20px;
            font-size: 1.1em;
        }
        @media (max-width: 600px) {
            .stickman {
                font-size: 2.5em;
            }
            .hidden-text {
                font-size: 1.8em;
            }
            button {
                font-size: 1em;
                padding: 10px 20px;
            }
            input[type="text"] {
                font-size: 1em;
            }
            .result, .translation, .definition, .progress, .score, .hearts {
                font-size: 1.2em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="stickman">Spelling Bee hehehe</div>
        <div class="progress" id="progress">Press "Start Game" then press "Hear the Word" to start the game</div>
        <div class="hearts" id="hearts"></div>
        <div id="wordContainer">
            <div class="hidden-text" id="hiddenText">Hidden</div>
        </div>
        <div class="score" id="score">Score: 0</div>
        <div class="button-container">
            <button onclick="startGame()">Start Game</button>
            <button onclick="speakWord()" id="hearWordButton" style="display:none;">Hear the Word</button>
            <input type="text" id="wordInput" placeholder="Type the word here">
            <button onclick="checkWord()">Submit Answer</button>
            <button onclick="nextWord()" id="nextWordButton" style="display:none;">Next Word</button>
        </div>
        <div class="info-container">
            <div class="translation" id="translation" style="display:none;"></div>
            <div class="definition" id="definition" style="display:none;"></div>
            <button onclick="showTranslation()">Show Translation</button>
            <button onclick="showDefinition()">Show Definition</button>
        </div>
        <div class="result" id="result"></div>
        <div class="animation-container">
            <!-- Optional: Add animation or decoration here -->
        </div>
        <div class="made-by">Made by sippawith</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
