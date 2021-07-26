'use strict';

//TODO: Selecting elements
const scoreEl = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// TODO: Starting conditions
scoreEl.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//TODO: Rolling dice functionality
btnRoll.addEventListener('click', () => {
  //MORE: Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  //MORE: Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //MORE: Check for rolled 1: if true, witch to next player
});

//TODO: New game functionality
//TODO: Hold score functionality
