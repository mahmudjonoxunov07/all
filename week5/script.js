'use strict';

let count = 0;
const button = document.querySelector('#counter-button');
const countDisplay = document.querySelector('#count-display');
const successMessage = document.querySelector('#success-message');

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;

  if (count >= 5) {
    button.classList.add('done');
    successMessage.textContent = 'Congratulations! You reached 5 clicks.';
  }
});
