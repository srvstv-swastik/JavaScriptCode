'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number..';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ...!!';
  }
  //   When the player wins the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number ...🥳😇🥳';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game...!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   When the player selects Greater Number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game...!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //   When  the player selects a lower Number
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'you lost the game ...!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// functionality of the again key
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message ').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
});

// This above  function which is passed as a parameter in the addEventListener function will not be called as the script is executed instead it will only be called when the event will occur (in this case the event is click).
