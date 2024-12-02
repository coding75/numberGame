'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number found in enter field';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess number is high';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Guess number is low';
    document.querySelector('.score').textContent = score;
  }
});
