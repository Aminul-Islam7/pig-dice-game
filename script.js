'use strict';

// Select elements
const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');
const current1 = document.getElementById('current-1');
const current2 = document.getElementById('current-2');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn-new');
const btnRollElement = document.querySelector('.btn-roll');
const btnHoldElement = document.querySelector('.btn-hold');

// Set initial conditions
score1.textContent = 0;
score2.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
let activePlayer = player1;

const switchPlayers = function () {
	if (activePlayer === player1) activePlayer = player2;
	else activePlayer = player1;
	player1.classList.toggle('player-active');
	player2.classList.toggle('player-active');
};

// Rolling dice functionality
btnRollElement.addEventListener('click', function () {
	// Generate a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;

	// Display dice
	diceElement.classList.remove('hidden');
	diceElement.src = `images/dice-${dice}.png`;

	// Check for rolled 1
	if (dice === 1) {
		currentScore = 0;
		activePlayer.querySelector('.current-score').textContent = currentScore;
		switchPlayers();
	} else {
		currentScore += dice;
		activePlayer.querySelector('.current-score').textContent = currentScore;
	}
});

