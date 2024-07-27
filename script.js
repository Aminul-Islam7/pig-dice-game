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

const switchPlayers = function () {
	activePlayer = activePlayer === 1 ? 2 : 1;
	document.querySelector('.player-1').classList.toggle('player-active');
	document.querySelector('.player-2').classList.toggle('player-active');
};

const updateCurrentScore = function () {
	document.getElementById(`current-${activePlayer}`).textContent = currentScore;
};

// Rolling dice
btnRollElement.addEventListener('click', function () {
	// Generate a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;

	// Display dice
	diceElement.classList.remove('hidden');
	diceElement.src = `images/dice-${dice}.png`;

	// Check for rolled 1
	if (dice === 1) {
		currentScore = 0;
		updateCurrentScore();
		switchPlayers();
	} else {
		currentScore += dice;
		updateCurrentScore();
	}
});

// Holding scores
btnHoldElement.addEventListener('click', function () {
	score[activePlayer] += currentScore;
	document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];

	currentScore = 0;
	updateCurrentScore();
	switchPlayers();
});

