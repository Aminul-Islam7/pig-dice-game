'use strict';

// Select elements
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn-new');
const btnRollElement = document.querySelector('.btn-roll');
const btnHoldElement = document.querySelector('.btn-hold');

// Set initial conditions
diceElement.classList.add('hidden');

let currentScore = 0;
let activePlayer = 1;
let score = {
	1: 0,
	2: 0,
};
let gameOver = false;

const switchPlayers = function () {
	currentScore = 0;
	updateCurrentScore();
	activePlayer = activePlayer === 1 ? 2 : 1;
	document.querySelector('.player-1').classList.toggle('player-active');
	document.querySelector('.player-2').classList.toggle('player-active');
};

const updateCurrentScore = function () {
	document.getElementById(`current-${activePlayer}`).textContent = currentScore;
};

// Rolling dice
btnRollElement.addEventListener('click', function () {
	if (gameOver) return;

	// Generate a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;

	// Display dice
	diceElement.classList.remove('hidden');
	diceElement.src = `images/dice-${dice}.png`;

	// Check for rolled 1
	if (dice === 1) {
		switchPlayers();
	} else {
		currentScore += dice;
		updateCurrentScore();
	}
});

// Holding scores
btnHoldElement.addEventListener('click', function () {
	if (gameOver) return;

	score[activePlayer] += currentScore;
	document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];

	if (score[activePlayer] >= 100) {
		gameOver = true;
		diceElement.classList.add('hidden');
		document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
		document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
	} else switchPlayers();
});

