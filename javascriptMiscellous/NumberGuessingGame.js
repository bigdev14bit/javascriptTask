const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const LEADERBOARD_FILE = path.join(__dirname, 'leaderboard.json');

// ANSI Escape Codes for UI Styling
const COLORS = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    bold: "\x1b[1m",
    bgBlack: "\x1b[40m"
};

let gameState = {
    playerName: "Player",
    targetNumber: 0,
    attemptsLeft: 0,
    maxAttempts: 0,
    maxRange: 100,
    score: 100,
    difficulty: "",
    lastGuess: null,
    streak: 0
};

function clearScreen() {
    console.clear();
}

function loadLeaderboard() {
    try {
        if (!fs.existsSync(LEADERBOARD_FILE)) {
            fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify([]));
        }
        const data = fs.readFileSync(LEADERBOARD_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveLeaderboard(name, score, difficulty) {
    let board = loadLeaderboard();
    board.push({ name, score, difficulty, date: new Date().toLocaleDateString() });
    // Sort highest score first
    board.sort((a, b) => b.score - a.score);
    // Keep top 5
    board = board.slice(0, 5);
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(board, null, 2));
}

function displayLeaderboard() {
    const board = loadLeaderboard();
    console.log(`\n${COLORS.magenta}${COLORS.bold}🏆 --- GLOBAL LEADERBOARD (TOP 5) --- 🏆${COLORS.reset}`);
    if (board.length === 0) {
        console.log("No high scores recorded yet. Be the first!");
    } else {
        board.forEach((entry, idx) => {
            console.log(`${idx + 1}. ${COLORS.yellow}${entry.name}${COLORS.reset} - ${COLORS.bold}${entry.score} pts${COLORS.reset} [${entry.difficulty}] (${entry.date})`);
        });
    }
    console.log(`${COLORS.magenta}--------------------------------------${COLORS.reset}\n`);
}

function startEngine() {
    clearScreen();
    console.log(`${COLORS.cyan}${COLORS.bold}==========================================`);
    console.log(`🎮  THE ULTIMATE NUMBER GUESSER PRO 2.0   🎮`);
    console.log(`==========================================${COLORS.reset}`);
    displayLeaderboard();
    
    rl.question(`Enter your operative name: `, (name) => {
        gameState.playerName = name.trim() || "Player One";
        chooseDifficulty();
    });
}

function chooseDifficulty() {
    console.log(`\n${COLORS.bold}Select Your Battleground, ${gameState.playerName}:${COLORS.reset}`);
    console.log(`1. ${COLORS.green}Easy${COLORS.reset}   (1-50,  10 attempts)`);
    console.log(`2. ${COLORS.yellow}Medium${COLORS.reset} (1-100, 7 attempts)`);
    console.log(`3. ${COLORS.red}Hard${COLORS.reset}   (1-200, 5 attempts)`);
    
    rl.question(`\nEnter choice (1, 2, or 3): `, (choice) => {
        switch (choice.trim()) {
            case '1': setupGame("Easy", 50, 10); break;
            case '2': setupGame("Medium", 100, 7); break;
            case '3': setupGame("Hard", 200, 5); break;
            default:
                console.log(`${COLORS.red}❌ Invalid input. Pick 1, 2, or 3.${COLORS.reset}`);
                chooseDifficulty();
        }
    });
}

function setupGame(difficulty, maxRange, attempts) {
    gameState.difficulty = difficulty;
    gameState.maxRange = maxRange;
    gameState.maxAttempts = attempts;
    gameState.attemptsLeft = attempts;
    gameState.score = 100;
    gameState.lastGuess = null;
    gameState.targetNumber = Math.floor(Math.random() * maxRange) + 1;

    clearScreen();
    console.log(`${COLORS.cyan}Mode: ${COLORS.bold}${difficulty}${COLORS.reset} | Target range: ${COLORS.bold}1 - ${maxRange}${COLORS.reset}`);
    console.log(`System has sealed the secret number. Initiating round...\n`);
    askGuess();
}

function askGuess() {
    const HUD = `[Turns Remaining: ${gameState.attemptsLeft} | Current Potential: ${gameState.score} pts]`;
    console.log(`${COLORS.magenta}${HUD}${COLORS.reset}`);

    rl.question(`Input your guess: `, (input) => {
        const guess = parseInt(input.trim(), 10);

        if (isNaN(guess) || guess < 1 || guess > gameState.maxRange) {
            console.log(`${COLORS.red}⚠️ Bounds mismatch! Enter a number between 1 and ${gameState.maxRange}.${COLORS.reset}\n`);
            return askGuess();
        }

        gameState.attemptsLeft--;

        if (guess === gameState.targetNumber) {
            handleWin();
        } else {
            evaluateCloseness(guess);
            gameState.lastGuess = guess;
            
            if (gameState.attemptsLeft <= 0) {
                handleLoss();
            } else {
                askGuess();
            }
        }
    });
}

function evaluateCloseness(guess) {
    const distance = Math.abs(guess - gameState.targetNumber);
    const percentDiff = distance / gameState.maxRange;
    
    // Proximity Feedback (Hot or Cold)
    let thermometre = "";
    if (percentDiff <= 0.05) {
        thermometre = `${COLORS.red}${COLORS.bold}🔥 SCORCHING HOT! You are right next to it!${COLORS.reset}`;
    } else if (percentDiff <= 0.15) {
        thermometre = `${COLORS.yellow}☀️ Warm! You are closing in.${COLORS.reset}`;
    } else if (percentDiff <= 0.35) {
        thermometre = `${COLORS.blue}❄️ Cool. A bit far off.${COLORS.reset}`;
    } else {
        thermometre = `${COLORS.cyan}${COLORS.bold}🥶 FREEZING COLD! Way off mark.${COLORS.reset}`;
    }

    // Directional Directional Tracking
    let direction = guess < gameState.targetNumber ? "📉 Go HIGHER." : "📈 Go LOWER.";
    
    console.log(`\n=> ${thermometre}`);
    console.log(`=> ${direction}\n`);

    // Depreciate Score algorithmically based on performance chunk
    const penalty = Math.floor(100 / gameState.maxAttempts);
    gameState.score = Math.max(0, gameState.score - penalty);
}

function handleWin() {
    clearScreen();
    console.log(`\n${COLORS.green}${COLORS.bold}==========================================`);
    console.log(`🎉 🏆 TARGET DESTROYED! YOU WIN! 🏆 🎉`);
    console.log(`==========================================${COLORS.reset}`);
    console.log(`User ID: ${COLORS.yellow}${gameState.playerName}${COLORS.reset}`);
    console.log(`The number was: ${COLORS.bold}${gameState.targetNumber}${COLORS.reset}`);
    console.log(`Calculated Final Score: ${COLORS.green}${COLORS.bold}${gameState.score}${COLORS.reset} points\n`);

    if (gameState.score > 0) {
        saveLeaderboard(gameState.playerName, gameState.score, gameState.difficulty);
        console.log(`${COLORS.green}💾 Data processed. Score logged to database successfully.${COLORS.reset}\n`);
    }
    askReplay();
}

function handleLoss() {
    clearScreen();
    console.log(`\n${COLORS.red}${COLORS.bold}==========================================`);
    console.log(`💥 CRITICAL FAILURE: OUT OF AMMO 💥`);
    console.log(`==========================================${COLORS.reset}`);
    console.log(`The elusive target index was: ${COLORS.bold}${gameState.targetNumber}${COLORS.reset}\n`);
    askReplay();
}

function askReplay() {
    displayLeaderboard();
    rl.question(`Execute another protocol? (${COLORS.bold}y/n${COLORS.reset}): `, (answer) => {
        if (answer.trim().toLowerCase() === 'y') {
            startEngine();
        } else {
            console.log(`\n${COLORS.cyan}Shutting down systems. Goodbye, operator.${COLORS.reset}`);
            rl.close();
            process.exit(0);
        }
    });
}

// Fire up program
startEngine();

